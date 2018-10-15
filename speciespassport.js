const Passport = function() {
    $('#passportCard').empty();
    const command = '';

    // build area
    const passCard = $('<div>');
    passCard.addclass('card-body');

    const home ='';
    const species = '';
    const businessType = '';
    const alertStatus = '';

    
    home.addclass('<p>');
    species.addclass('<p>');
    businessType.addclass('<p>');
    alertStatus.addclass('<p>');





    const yoda = function () {
        let command = 'yoda';
        let home = 'Dagobah';
        let species = 'unknown';
        let businessType = 'republic business';
        let alertStatus = 'allow to proceed';
        
        console.log('do or do not, there is not try');
    };
    
    const pirate = function() {
        let command = 'pirate';
        let home = 'Tortuga';
        let species = 'scallywag';
        let businessType = 'marauder';
        let alertStatus = 'observe with caution';
        console.log('This is the day you will always remember as the day you almost caught Captain Jack Sparrow');
    
    };

    const vulcan = function() {
        let command ='vulcan';
        let home = 'Vulcan';
        let species = 'Vulcan';
        let businessType = 'VSA Observation';
        let alertStatus = 'Live long and prosper';

        console.log('fascinating');
    };

    const klingon = function () {
        let command = 'klingon';
        let home = 'Qonos';
        let species = 'Klingon';
        let businessType = 'Diplomatic Envoy with Starfleet';
        let alertStatus = 'observe with caution';
        console.log('Qapla');
    };

    const romulan = function () {
        let command = 'romulan';
        let home = 'Romulus';
        let species = 'Romulan';
        let businessType = 'Meeting with Federation High Council';
        let alertStatus = 'observe with caution';
        console.log('Beware Romulans bearing gifts');
    };

    const sindarin = function () {
        let command = 'elves';
        let home = 'Lothlorien';
        let species = 'Elves';
        let businessType = 'Meeting with Gandalf the Grey';
        let alertStatus = 'allow to proceed';
        console.log('lothlorien');
    };

    const swedChef = function () {
        let command = 'swedChef';
        let home = 'Jim Hensons Creature Shop';
        let species = 'Muppet';
        let businessType = 'Cooking Convention';
        let alertStatus = 'Bork Bork Bork';
        console.log('hurdy gurdy um di chicky');
    };

    const elmer = function () {
        let command = 'fudd';
        let home = 'Warner Studios';
        let species = 'Human';
        let businessType = 'Huntin Wabbits';
        let alertStatus = 'observe with caution';
        console.log('wabbit season');
    };

    const william = function() {
        let command = 'shakespeare';
        let home = 'Stratford upon Avon';
        let species = 'Human';
        let businessType = 'Globe Theater reconstruction';
        let alertStatus = 'no harm shall come to thee until Burnam Wood comes to Dunsinane';
        console.log('Beware the ides of March');
    };

    const darth = function() {
        let command = 'sith';
        let home = 'Tortuga';
        let species = 'scallywag';
        let businessType = 'marauder';
        let alertStatus = 'observe with Extreme caution';
        console.log('always two there are');
    };

    const gungan = function() {
        let command = 'jarjar';
        let home = 'Naboo';
        let species = 'Gungan';
        let businessType = 'Republic Senate';
        let alertStatus = 'allow to proceed';
        console.log('meesa no worry');
    };

    const hutt = function() {
        let command = 'jabba';
        let home = 'Nal-Hutta';
        let species = 'Hutt';
        let businessType = 'legitimate business transaction';
        let alertStatus = 'observe with Extreme caution';
        console.log('tell jabba I will bring him the money');
    };
    
    const flowDirect = function() {
        event.preventDefault();
        switch (command) {
            case 'pirate':
                pirate ();
                break;
            case 'vulcan':
                vulcan();
                break;
            case 'klingon':
                klingon();
                break;
            case 'romulan':
                romluan();
                break;
            case 'elves':
                elves();
                break;
            case 'swedChef':
                swedChef();
                break;
            case 'fudd':
                elmer();
                break;
            case 'shakespeare':
                william();
                break;
            case 'sith':
                darth();
                break;
            case 'jarjar':
                gungan();
                break;
            case 'jabba':
                hutt();
                break;
        }
        console.log("switch");
    };



   
    $('#passportCard').append();
};

