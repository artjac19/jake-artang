<script setup>

defineProps({
    action: {
        type: String,
        default: "https://www.paypal.com/cgi-bin/webscr"
    },
    buttonId: {
        type: String,
        default: "THWYXNZ5ZKD78",
    },
    label: {
        type: String,
        default: "Waterskiing"
    },
    type: {
        type: String
    },
    type2: {
        type: String
    },
    type3: {
        type: String
    },
    options: {
        type: Array,
        default: () => [ 
            null
        ]
    },
    options2: {
        type: Array,
        default: () => [
            null
        ]
    },
    options3: {
        type: Array,
        default: () => [
            null
        ]
    }
});
</script>


<template>
    <div>
        <form :action="action" method="post" target="paypal">
            <input type="hidden" name="cmd" value="_s-xclick">
            <input type="hidden" name="hosted_button_id" :value="buttonId">
            <input type="hidden" name="on0" :value="type">
            <input type="hidden" name="on1" :value="type2">
            <input type="hidden" name="on2" :value="type3">
            <p style="margin: 0; padding-bottom: 1vh; text-align: center;"> {{ label }} </p>
            <select v-if="(options[0]) !== null"  name="os0">
                <option v-for="(option, index) in options" :key="index" :value="option.value">{{ option.label }}
                </option>
            </select>
            <select v-if="(options2[0]) !== null" name="os1">
                <option v-for="(option, index) in options2" :key="index" :value="option.value">{{ option.label }}
                </option>
            </select>
            <select v-if="(options3[0]) !== null" name="os2">
                <option v-for="(option, index) in options3" :key="index" :value="option.value">{{ option.label }}
                </option>
            </select>
            <input type="hidden" name="currency_code" value="USD">
            <button type="submit" class="submit-button" style="margin-top: 1vh;">Pay with PayPal</button>
        </form>
    </div>
</template>

<style scoped>
form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 0;
    margin-right: 0;
    margin-top: 0vh;
    background-color: #333;
    padding: 2vh;
    border-radius: 8px;
}

select {
    font-family: 'Montserrat', serif;
    font-size: .9em;
    border: none;
    border-radius: 4px;
    background-color: #444;
    color: white;
    line-height: 2;
    padding: 1.3vh;
    margin-bottom: 1vh;
}

select:hover {
    cursor: pointer;
}

.submit-button {
    font-family: 'Montserrat', serif;
    font-size: .9em;
    color: white;
    background-color: #28a745;
    padding: 1.3vh;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    text-align: center;
}

.submit-button:hover {
    background-color: #218838;
}
</style>