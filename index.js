var app = new Vue({
    el: '#ageQuestions',
    data: {
        labelStyle: {
            fontSize: '1.1em',
            'min-width': '325px',
            display: 'inline-block'
        },
        valueStyle: {
            fontSize: '1.1em',
            display: 'inline-block'
        },
        titleStyle: {
            'margin-top': '1em',
            fontWeight: 'bold',
            fontSize: '1.1em',
            background: 'lightblue'
        },
        /* -------------- AGE ----------- */
        ageTitle: 'Age Questions',
        ageItems: [
            {
                id: 'currentAge',
                label: 'Current Age',
                msg: 40
            },
            {
                id: 'retirementAge',
                label: 'Retirement Age',
                msg: 62
            },
            {
                id: 'yearsAvailableForGrowth',
                label: 'Years available for growth.  T =',
                msg: 22
            },
        ],
        /* -------------- SALARY ----------- */
        salaryTitle: 'Savings & Growth',
        salaryItems: [
            {
                id: 'currentSalary',
                label: 'Current Salary',
                msg: 50 * 1000
            },
            {
                id: 'currentSavings',
                label: 'Current Savings (401K, IRA, CDs etc).  P =',
                msg: 150000
            },
            {
                id: 'rateOfGrowth',
                label: 'Rate of interest.  R =',
                msg: 6
            },
        ],
        calculatedValue: 0
    },
    methods: {
        calculate: function (event) {
            // Calculate the years available for growth
            var P = this.salaryItems[1].msg;
            var R = this.salaryItems[2].msg / 100;
            var T = this.ageItems[1].msg - this.ageItems[0].msg;
            this.yearsAvailableForGrowth = T;
            var A = Math.round(P * Math.pow((1 + R), T));
            this.calculatedValue = A;
        }
    }
})