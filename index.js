var app = new Vue({
    el: '#ageQuestions',
    data: {
        labelStyle: {
            fontSize: '1.3em',
            'min-width': '200px',
            display: 'inline-block'
        },
        valueStyle: {
            fontSize: '1.3em',
            display: 'inline-block'
        },
        titleStyle: {
            fontWeight: 'bold',
            fontSize: '1.3em',
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
                msg: 40
            },
            {
                id: 'retirementAge',
                label: 'Retirement Age',
                msg: 62
            },
        ]
    }
})