var app = new Vue({
    el: '#ageQuestions',
    data: {
        labelStyle: {
            fontSize: '1.1em',
            'min-width': '300px',
            display: 'inline-block'
        },
        valueStyle: {
            fontSize: '1.1em',
            display: 'inline-block'
        },
        titleStyle: {
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
        ],
        /* -------------- SALARY ----------- */
        salaryTitle: 'Salary Questions',
        salaryItems: [
            {
                id: 'currentSalary',
                label: 'Current Salary',
                msg: 50 * 1000
            },
            {
                id: 'annualSavings',
                label: 'Annual Savings (401K, IRA, CDs etc)',
                msg: 10000
            },
        ],
        calculatedValue: 0
    },
    methods: {
        calculate: function (event) {
            this.calculatedValue = this.salaryItems[0].msg * 10;
        }
    }
})