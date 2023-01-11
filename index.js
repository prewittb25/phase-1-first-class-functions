

function receivesAFunction(spy) {

    spy();

}



function returnsANamedFunction() {

    return function name() {

        return "name"
    };
    }


    
    function returnsAnAnonymousFunction() {

        return function() {

            console.log("anonymous has no name");
        }
    }

