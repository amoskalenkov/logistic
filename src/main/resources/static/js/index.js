requirejs.config({
    baseUrl: 'js'
})


function buildRoute(view) {
    return function() {
        webix.ui({
            id: 'root',
            rows: [
                view
            ]
        }, $$("root"))
    }
}

function buildButton(lable, route) {
    return {
        view: "button",
        value: lable,
        width: 100,
        align: "center",
        click: function () {
            routie(route)
        },
    };
}

require(
    [
        'views/main',
        'views/car/carList',
        'views/mark/markList',
        'views/model/modelList',
        'util/resourceProxy'
    ],
    function(main, cars, marks, models, resourceProxy) {
    webix.ready(function() {
        webix.ui({
            container: "app",
            width: document.body.clientWidth,
            height: document.body.clientHeight,
            rows: [
                {
                    view:"toolbar",
                    cols:[
                        buildButton('Home', ''),
                        buildButton('Marks', 'marks'),
                        buildButton('Models', 'models'),
                        buildButton('Cars', 'cars'),
                    ]
                },
                {
                    id: 'root'
                }
            ]
        })
    })

    routie({
        '': buildRoute(main),
        'cars': buildRoute(cars),
        'models': buildRoute(models),
        'marks': buildRoute(marks)
    })
})
