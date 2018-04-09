<template>
    <div class="panel panel-default">
        <div class="panel-heading">
            <h3 class="panel-title text-center">{{ question }}</h3>
        </div>
        <div class="panel-body">
            <div class="col-xs-12 col-sm-6 text-center" v-for="btn in btnData">
                <button class="btn btn-primary btn-lg" style="margin: 10px" @click="onAnswer(btn.correct)">{{
                    btn.answer }}
                </button>
            </div>
        </div>
    </div>
</template>
<style>

</style>
<script>
    const MODE_ADDITION = 1;
    const MODE_SUBTRACTION = 2;
    export default {
        data() {
            return {
                question: 'Oops, an error ocurred :/',
                btnData: [
                    {correct: true, answer: 0},
                    {correct: false, answer: 0},
                    {correct: false, answer: 0},
                    {correct: false, answer: 0}
                ]
            };
        },
        methods: {
            generateQuestion() {
                const firstNumber = this.generateRandomNumber(1, 100);
                const secondNumber = this.generateRandomNumber(1, 100);
                const modeNumber = this.generateRandomNumber(1, 2);

                let correctAnswer = 0;

                switch (modeNumber) {
                    case MODE_ADDITION:
                        correctAnswer = firstNumber + secondNumber;
                        this.question = `What's ${firstNumber} + ${secondNumber}?`;
                        break;
                    case MODE_SUBTRACTION:
                        correctAnswer = firstNumber - secondNumber;
                        this.question = `What's ${firstNumber} - ${secondNumber}?`;
                        break;
                    default:
                        correctAnswer = 0;
                        this.question = 'Oops, an Error occurred :/';
                }
                this.btnData = this.btnData.map(() => {
                    return {
                        answer: this.generateRandomNumber(correctAnswer - 10, correctAnswer + 10, correctAnswer),
                        correct: false
                    }
                });

                const correctButton = this.generateRandomNumber(0, 3);
                this.btnData[correctButton] = {
                    correct: true,
                    answer: correctAnswer
                }
            },
            generateRandomNumber(min, max, except) {
                const rndNumber = Math.round(Math.random() * (max - min)) + min;
                if (rndNumber === except) {
                    return this.generateRandomNumber(min, max, except);
                }
                return rndNumber;
            },
            onAnswer(isCorrect) {
                this.$emit('answered', isCorrect);
            }
        },
        created() {
            this.generateQuestion();
        }
    }
</script>
