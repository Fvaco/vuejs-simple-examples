export const CountFormatterMixin = {
    data() {
        return {
            fourText: ''
        }
    },
    computed: {
        fourTextFormatted() {
            return `${this.fourText} (${this.fourText.length})`;
        }
    }
};
