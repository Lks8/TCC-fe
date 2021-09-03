<template>
    <div>
        <div>
            <p class="alert-message">
                <fa
                    class="fail"
                    icon="times-circle"
                    v-if="alertIcon == 'fail'"
                />
                <fa
                    class="success"
                    icon="check-circle"
                    v-if="alertIcon == 'success'"
                />
                <fa
                    class="warning"
                    icon="exclamation-triangle"
                    v-if="alertIcon == 'warning'"
                />
                {{ alertMessage }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    data: function () {
        return {};
    },
    props: {
        alertIcon: {
            type: String,
            default: () => "fail",
        },
        alertMessage: {
            type: String,
            default: () => "",
        },
    },
};
</script>

<style>

.alert-message {
    font-family: "Rubik";
    font-weight: bold;
    margin: 0 auto;
}
.fail {
    color: crimson;
}

.success {
    color: green;
}

.warning {
    color: orange;
}
</style>