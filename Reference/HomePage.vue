<script setup>
import { onMounted } from 'vue';
import PayPalForm from './PayPalForm.vue';

onMounted(() => {
  const script = document.createElement('script');
  script.src = "https://embed.acuityscheduling.com/embed/button/11402006.js";
  script.async = true;
  document.body.appendChild(script);
});

</script>

<template>
  <div class="vert-container" style="margin-top: 12.5vh;">
    <img id="1" src="../assets/banner.webp" style="width: 100vw; max-width: 100%; margin: 0 0 auto 0; padding-top: 0 0 auto 0;">
    <p style="text-align: center !important; margin-top: 4vh;">Call or email now to let our pros teach you how to ski or wakeboard!<br>
      We offer a variety of economical packages perfect for individuals or large groups.<br>
      Our Proshop sells a variety of waterski equipment. Be sure to check it out!<br>
      Come hang out at the lake on a hot day or play a round of disc golf!
<br><br></p>
    <div class="photos">
      <img class="photo" src="../assets/david1ball.webp" style="width: 60vh; height: auto;">
      <img class="photo" src="../assets/collegevolleyball.webp" style="width: 60vh; height: auto;">
      <img class="photo" src="../assets/swerveshirts.webp" style="width: 60vh; height: auto;">
    </div>
    <div class="photos">
      <iframe class="youtube-1"
        src="https://www.youtube.com/embed/WbCv3Hfaquk" frameborder="0" allowfullscreen></iframe>
      <iframe class="youtube-2" src="https://www.youtube.com/embed/4HUNnQ2dQes"
        frameborder="0" allowfullscreen></iframe>
    </div>

    <h2 style="margin-top: 10vh; margin-bottom: 2vh;" id="2">Schedule a Visit</h2>
    <p style="text-align: center;">
      You can schedule a visit by text, phone, email, or right here online.<br>
      Contact info can be found at the bottom of the page, and the scheduling tool is below.<br>
      You can see more information below on some of our packages, events, and calendar.<br>
      Payments can be made through the paypal option below, or can be made in person with cash, check, or venmo.<br>
      If it's your first time out this season, make sure to sign the <a href='https://form.jotform.com/220764194303048' target="_blank">Swerve Watersports Waiver</a>.
    </p>
    <PayPalForm style="margin-bottom: 4vh; align-self: center;"
      class="photo"
      :options="[
        { value: 'Lesson', label: 'Lesson $50.00 USD' },
        { value: 'Ten Pack', label: 'Ten Pack $400.00 USD' },
        { value: '1 Day Lessons', label: '1 Day Lessons $140.00 USD' },
        { value: 'Collegiate Day Stay', label: 'Collegiate Day Stay $140.00 USD' },
        { value: 'Event Practice 4 passes', label: 'Event Practice 4 passes $15.00 USD' },
        { value: 'Season Pass', label: 'Season Pass $2,450.00 USD' }
      ]" 
    />
  <a href="https://app.acuityscheduling.com/schedule.php?owner=11402006" target="_blank" class="acuity-embed-button" style="margin: 0 0 3vh 2vw; font-family: 'Montserrat', serif; color: #fff; padding: 8px 12px; border: 0px; border-radius: 4px; text-decoration: none; display: inline-block;">Schedule Appointment</a><link rel="stylesheet" href="https://embed.acuityscheduling.com/embed/button/11402006.css" id="acuity-button-styles" />
  <table>
   <tr><th><p>Type</p></th><th><p>Price</p></th><th><p>Description</p></th></tr>
   <tr><td><p>Ski Lesson</p></td><td><p>$50</p></td><td><p>Learn how to get up or master a new trick with our expert coaches in a one-on-one, 30 minute session. You’re guaranteed to walk away with some additional knowledge!</p></td></tr>
   <tr><td><p>One Day Lessons</p></td><td><p>$140</p></td><td><p>Three (3) coached sets in one day</p></td></tr>
   <tr><td><p>Ten Lesson Pass</p></td><td><p>$400</p></td><td><p>Ten (10) ski rides that can be used at any time.</p></td></tr>
   <tr><td><p>Reserve the Lake for an hour</p></td><td><p>$140/hr</p></td><td><p>Reserve an hour slot with a driver and coach! In general you can get 4 long sets in during the hour, more people equals shorter sets.</p></td></tr>
   <tr><td><p>Reserve the Lake for a Day</p></td><td><p>$720</p></td><td><p>Reserve the lake from 10:00am - 4:00pm, with driver and coach provided. Lunch can also be provided for $10 per meal.</p></td></tr>
   <tr><td><p>Collegiate Pass</p></td><td><p>$140/day</p></td><td><p>Includes three (3) coached sets for the day. Lodging and food are provided, and discounts can be made for large groups and teams!</p></td></tr>
   <tr><td><p>Event Practice</p></td><td><p>$15</p></td><td><p>Practice is discounted Fridays before tournaments for all participants!</p></td></tr>
   <tr><td><p>Season Pass</p></td><td><p>$2,450</p></td><td><p>Unlimited skiing for one person per season. Free skiing for an entire season!</p></td></tr>
  </table>
  <table class="mobile-table">
   <tr><td><p><b>Ski Lesson: </b>$50<br>Learn how to get up or master a new trick with our expert coaches in a one-on-one, 30 minute session. You’re guaranteed to walk away with some additional knowledge!</p></td></tr>
   <tr><td><p><b>One Day Lessons: </b>$140<br>Three (3) coached sets in one day</p></td></tr>
   <tr><td><p><b>Ten Lesson: </b>$400<br>Ten ski rides that can be used at any time.</p></td></tr>
   <tr><td><p><b>Reserve the Lake for an hour: </b>$140/hr<br>Reserve an hour slot with a driver and coach! In general you can get 4 long sets in during the hour, more people equals shorter sets.</p></td></tr>
   <tr><td><p><b>Reserve the Lake for a Day: </b>$720<br>Reserve the lake from 10:00am - 4:00pm, with driver and coach provided. Lunch can also be provided for $10 per meal.</p></td></tr>
   <tr><td><p><b>Collegiate Pass: </b>$140/day<br>Includes three (3) coached sets for the day. Lodging and food are provided, and discounts can be made for large groups and teams!</p></td></tr>
   <tr><td><p><b>Event Practice: </b>$15<br>Practice is discounted Fridays before tournaments for all participants!</p></td></tr>
   <tr><td><p><b>Season Pass: </b>$2,450<br>Unlimited skiing for one person per season. Free skiing for an entire season!</p></td></tr>
  </table>

  <h2>Large Groups</h2>
  <p style="text-align: center;">Do you have a large group and want to reserve the lake for a certain number of rides or hours? We can make that happen! From birthday parties to corporate events we can show your group a good time, build comradery, and teach a fun sport! We have food and lodging available if needed and can provide fun activities off the water as well. Call with any questions and we can tell you more about our packages. Reserving the lake for an hour is $140 and includes a 2 person crew to help with all your needs. With this option you can try and fit as many people into the hour as possible, or take just a few long sets. We recommend no more than 5 skiers try to ski in an hour. Discounts are offered for large groups of skiers, so be sure to reach out for information specific to your group!  </p>
  <iframe src="https://calendar.google.com/calendar/embed?src=slalombum%40gmail.com&ctz=America%2FChicago" style="border: 0; margin-top: 3vh; margin-bottom: 5vh; width: 80vw; height: 80vh;" align-self="center" frameborder="0" scrolling="no"></iframe>
  <h2 id="3">Our Team</h2>
  <p>&#8195; &#8195;Our riders are multi sport athletes that express themselves on boards that cater to their styles and preferences. Our staff of professional water ski and wake board coaches can teach a first time skier or an advanced athlete the newest techniques to gain another trick, buoy, or foot.</p>
  <div class="photos" style="align-items: center;">
    <div class="vert-container">
    <p style="font-size: 1.5em; margin-bottom: 0;">
      Ashley Landis
    </p>
    <ul>
      <li>Age: 23</li>
      <li>Hometown: Ohio</li>
      <li>Midwest Allstars Team 7th Place Jump 2023</li>
      <li>2023 Nationals</li>
    </ul>
  </div>
    <img class="photo" alt="Ashley slalom" style="width: 450px; height: auto;" src="../assets/ashley2.webp" />
    <img class="photo" alt="Ashley trick" style="width: 400px; height: auto;" src="../assets/ashley1.webp" />
  </div>
  <div class="photos" style="align-items: center;">
    <div class="vert-container">
    <p style="font-size: 1.5em; margin-bottom: 0;">
      Michael Bullock
    </p>
    <ul>
      <li>Age: 32</li>
      <li>Hometown: Nashville TN</li>
      <li>2011 Div II National Collegiate Slalom Champion</li>
      <li>Open rating in Slalom</li>
      <li>2023 Mens 2 National Slalom Champion 2nd in Overall</li>
    </ul>
  </div>
    <img class="photo" alt="Mike jump" style="width: 400px; height: auto;" src="../assets/mike.webp" />
    <img class="photo" alt="Mike slalom" style="width: 450px; height: auto;" src="../assets/mike1.webp" />
  </div>
  <div class="photos" style="align-items: center;">
    <div class="vert-container">
    <p style="font-size: 1.5em; margin-bottom: 0;">
      Finlay Donovan
    </p>
    <ul>
      <li>Age: 20</li>
      <li>Hometown: Dallas, TX</li>
      <li>College: Purdue</li>
      <li>Purdue Waterski A-team</li>
      <li>2023 Collegiate Nationals</li>
    </ul>
  </div>
  <img class="photo" alt="Finlay slalom" style="width: 533.3px; height: auto;" src="../assets/finlaySlalom.webp" />
  <img class="photo" alt="Finlay jump" style="width: 400px; height: auto;" src="../assets/finlayJump.webp" />
  </div>
  <div class="photos" style="align-items: center;">
    <div class="vert-container">
    <p style="font-size: 1.5em; margin-bottom: 0;">
      Jake Artang
    </p>
    <ul>
      <li>Age: 19</li>
      <li>Hometown: Prior Lake, MN</li>
      <li>College: UW-Madison</li>
      <li>2023 Shredfest Slalom Champion</li>
      <li>Top 10 Men's Slalom 2023 Midwest Collegiate Season</li>
      <li>MCWSA Rookie of the Year</li>
    </ul>
  </div>
  <img class="photo" alt="Jake slalom" style="width: 480px; height: auto;" src="../assets/jakeSlalom.webp" />
  <img class="photo" alt="Barbell slalom" style="width: 400px; height: auto;" src="../assets/barbellSlalom2.webp" />
  </div>
  <h2 id="4">Lake and Area</h2>
  <p>&#8195; &#8195;Swerve Watersports Center is on Lake Grace in Hillsboro, Tennessee. Surrounded on one side by woods, grass trails 
    and marsh, the other by a nice neighborhood, the sight is beautiful. Lake Grace is a custom built water ski lake, dug in 2004 by 
    Nicky Lowe. It was designed specifically for 3-event water skiing with a shallow depth, slopes to eliminate rollers, and a perfect 
    shape. Hillsboro TN, is close to civilization but far out enough to feel like the country. Only 2 minutes from I-24 which runs directly
    between Nashville and Chattanooga, there is never a shortage of entertainment or sightseeing within an hour's drive. With restaurants and big name stores less than 5 minutes away, anything you might need is close at hand. At our site you should expect to find a relaxed and friendly environment with great skiers and coaches. Come ski with us!</p>
  <div class="photos">
    <div class="vert-container">
      <h2>Ammenities</h2>
      <ul>
        <li>Club House with bunkbeds, kitchen, and showers</li>
        <li>Pool and Ping Pong Tables</li>
        <li>Volleyball Court</li>
        <li>Hot Tub</li>
        <li>Camping Area</li>
        <li>Fire Pits</li>
        <li>Plenty of Parking</li>
        <li>Free WiFi</li>
        <li>Camper parking available</li>
        <li>Fishing</li>
        <li>Tent Camping</li>
      </ul>
    </div>
    <div class="vert-container">
      <img class="photo" alt="Swerve Watersports Center Boat View" style="margin-top: 5vh" width="480" height="300" src="../assets/jacuzzi.webp" />
      <img class="photo" alt="Swerve Watersports Center Hillsboro" style="width: 480px; height: auto;" src="../assets/sunset.webp" />
    </div>
  </div>
  <div class="photos">
    <img class="photo" alt="SWC" style="width: 420px; height: auto;" src="../assets/lake.webp" />
    <img class="photo" alt="Swerve" style="width: 420px; height: auto;" src="../assets/lake3.webp" />
    <img class="photo" alt="Waterski Jucuzzi SWC" style="width: 420px; height: auto;" src="../assets/lake2.webp" />
  </div>
  
  <h2>Things to Do</h2>
<div class="info-container">
  <div class="info-item">
    <p>
      <b>In Manchester</b><br>
      <a target="_blank" href="http://www.jackdaniels.com/">Jack Daniels Distillery</a><br>
      <a target="_blank" href="http://tnstateparks.com/parks/about/rock-island">Rock Island State Park</a><br>
      <a target="_blank" href="http://www.bonnaroo.com/">Bonaroo Music Festival</a><br>
      <a target="_blank" href="http://www.cumberlandcaverns.com/">Cumberland Caverns</a><br>
      <a target="_blank" href="http://www.beanscreekwinery.com/">Beans Creek Winery</a><br>
      <a target="_blank" href="https://skyaboveus.com/water-sports/10-Great-Kayaking-Launch-Areas-in-Middle-Tennessee">Middle TN river floats</a><br>
    </p>
  </div>
  <div class="info-item">
    <p>
      <b>Golf Courses</b><br> 
      <a target="_blank" href="https://www.golfwillowbrook.net/">Willowbrook golf course</a><br>
      The nicest course in the area<br>
      <a target="_blank" href="http://scenicview.x10.mx/">Scenic View golf course</a><br>
      A cheaper more laid back course closer to swerve<br>
    </p>
  </div>
  <div class="info-item">
    <p>
      <b>Manchester Rec Center</b><br>
      557 N Woodland St, Manchester, TN 37355<br>
      Has a pool, racquetball, indoor track, basketball, weights and exercise equipment, exercise classes.
    </p>
  </div>
  <div class="info-item">
    <p>
      <b>Climbing</b><br>
      <a target="_blank" href="https://www.mountainproject.com/area/105883248/foster-falls">Foster Falls</a>- also the location of an awesome waterfall listed below<br>
      <a target="_blank" href="https://www.mountainproject.com/area/112533882/denny-cove">Denny Cove</a><br>
      <a target="_blank" href="https://www.mountainproject.com/area/108613875/castle-rock">Castle Rock</a><br>
      <a target="_blank" href="https://www.mountainproject.com/area/106031921/stone-fort-aka-little-rock-city">Stone Fort/ Little Rock City</a><br>
      <a target="_blank" href="https://www.mountainproject.com/area/105851828/the-tennessee-wall">The Tennessee Wall</a>
    </p>
  </div>
  <div class="info-item">
    <p>
      <b>Local Waterfalls</b><br>
      Foster Falls<br>
      498 Foster Falls Rd, Sequatchie, TN 37374<br>
      40 minutes away, Excellent climbing, hiking and a great waterfall and pool with a climbing route under the falls!<br>
      Fall Creek Falls<br>
      2009 Village Camp Road Spencer, TN 38585<br>
      The tallest falls in Tennessee at 256 feet, about an hour away, there are multiple falls and pools.<br>
      <a target="_blank" href="http://www.scenicusa.net/092512.html">Greeter Falls</a><br>
      Greeter Trail Altamont, TN<br>
      <a target="_blank" href="http://www.rubyfalls.com/">Ruby Falls</a><br>
    </p>
  </div>
  <div class="info-item">
    <p>
      <b>Hiking</b><br>
      Foster Falls Fiery Gizzary trail 12.5mi<br>
      Follow the Fiery Gizzard trail from Foster Falls, 498 Foster Falls rd to 131 Fiery Gizzard Rd, Tracy City, TN 37387.<br>
      Walk above foster falls along an incredible ridgeline and across lots of bridges.<br>
      <a target="_blank" href="https://www.alltrails.com/trail/us/tennessee/buggytop-trail-to-lost-cove-cave">Buggy Top Trail to Lost Cove Cave 3.7mi</a><br>
      Trail takes you through 3.7 miles of great woods to a Cave and creek<br>
      A little tricky to follow the path at times, bring flashlights for the cave!<br>
    </p>
  </div>
  <div class="info-item">
    <p>
      <b>In Nashville</b> <br>
      <a target="_blank" href="http://www.visitmusiccity.com/">City of Nashville</a><br>
      Edleys BBQ <br>
      Praters BBQ in Manchester<br>
      12th st, lots of small shops and food<br>
      Broadway, live music and drinks <br>
      Nashville Predators, best hockey in the south, on broadway downtown nashville. <br>
      Tennessee Titans <br>
      Nashville Zoo <br>
      Top Golf <br>
    </p>
  </div>
  <div class="info-item">
    <p>
      <b>Fred Deadman Park</b><br>
      166 Wilson St, Manchester, TN 37355<br>
      Tennis Courts, paved walking path, Baseball fields, Skatepark, in downtown Manchester right next to the rec center.<br>
    </p>
  </div>
  <div class="info-item">
    <p>
      <b>Tubing the River</b><br>
      Put-in:<br>
      A three hour or so tube down the river.  Depending on rain it takes longer or shorter and you need to walk some parts if there isn't much flow.<br>
      <a target="_blank" href="http://www.floattn.com/floatin_trips.pdf">Other Float Options on the 3 Forks</a>
    </p>
  </div>
  <div class="info-item">
    <p>
      <b>Longboard Hills (Not recommending you try to do this!)</b><br>
      Hwy 56 Beersheba springs TN<br>
      Clouse Hill rd. and Payne Cove rd. Pelham TN<br>
    </p>
  </div>
  <div class="info-item">
    <p>
      <b>In Chattanooga</b><br>
      <a target="_blank" href="http://www.chattanoogafun.com/">City of Chattanooga</a><br>
      <a target="_blank" href="http://www.tnaqua.org/Home.aspx">TN Aquarium</a><br>
    </p>
  </div>
</div>

<!--<h2 id="5">Example header</h2>
<p>&#8195; &#8195;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet,
   nibh nec rutrum volutpat, ante turpis empus lacus, non condimentum quam est quis diam. 
   Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; 
   Cras auctor vitae turpis in volutpat. Quisque convallis eros eu odio volutpat, ut dapibus 
   lacus porta. Curabitur sit amet erat suscipit, accumsan risus quis, ornare lacus.</p>-->

</div>

</template>
