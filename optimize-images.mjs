import sharp from 'sharp';
import fs from 'fs-extra';
import path from 'path';
import imagemin from 'imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';
import imageminSvgo from 'imagemin-svgo';
import imageminWebp from 'imagemin-webp';

const inputDir = 'originalAssets';
const tempDir = 'tempAssets';
const outputDir = 'src/assets';

// Helper function to recursively get all files in a directory
const getAllFiles = async (dirPath, arrayOfFiles = []) => {
  const files = await fs.readdir(dirPath);

  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stats = await fs.stat(filePath);

    if (stats.isDirectory()) {
      arrayOfFiles = await getAllFiles(filePath, arrayOfFiles);
    } else {
      arrayOfFiles.push(filePath);
    }
  }
  return arrayOfFiles;
};

const rotateImages = async (inputDir, tempDir) => {
  const files = await getAllFiles(inputDir);

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    const relativePath = path.relative(inputDir, file);
    const outputFile = path.join(tempDir, relativePath);

    await fs.ensureDir(path.dirname(outputFile));

    if (ext === '.jpg' || ext === '.jpeg' || ext === '.png') {
      const image = sharp(file);
      const metadata = await image.metadata();

      if (metadata.orientation) {
        await image.rotate().toFile(outputFile);
      } else {
        await fs.copy(file, outputFile);
      }
    } else {
      await fs.copy(file, outputFile);
    }
  }
};

const optimizeImages = async (tempDir, outputDir) => {
  const files = await getAllFiles(tempDir);

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    const relativePath = path.relative(tempDir, file);
    const outputFile = path.join(outputDir, relativePath);
    const webpFilePath = path.join(path.dirname(outputFile), path.basename(outputFile, ext) + '.webp');

    await fs.ensureDir(path.dirname(outputFile));

    // Skip optimization if a corresponding .webp file already exists
    if (await fs.pathExists(webpFilePath)) {
      console.log(`Skipping ${file} (WebP already exists)`);
      continue;
    }

    if (['.jpg', '.jpeg', '.png', '.svg'].includes(ext)) {
      await imagemin([file], {
        destination: path.dirname(outputFile),
        plugins: [
          imageminMozjpeg({ quality: 75 }),
          imageminPngquant({ quality: [0.5, 0.7] }),
          imageminSvgo({
            plugins: [{ name: 'preset-default' }],
          }),
        ],
      });

      // Convert to WebP after optimization
      await sharp(file)
        .webp({ quality: 75 })
        .toFile(webpFilePath);

      console.log(`Optimized: ${file} -> ${outputFile}`);
      console.log(`Generated WebP: ${webpFilePath}`);
    } else {
      await fs.copy(file, outputFile);
    }
  }

  console.log('All images optimized.');
};

const main = async () => {
  try {
    await rotateImages(inputDir, tempDir);
    await optimizeImages(tempDir, outputDir);
    await fs.remove(tempDir); // Clean up temporary directory
  } catch (err) {
    console.error('Error optimizing images:', err);
  }
};

main();
