const speciesPassport = function() {
    $('#passportCard').empty();
    let command = alienChosen;

    // build area
    const passCard = $('<div>');
    passCard.addClass('card-body');

    let home ='';
    let species = '';
    let businessType = '';
    let alertStatus = '';


    const yoda = function () {
        home = 'Dagobah';
        species = 'unknown';
        businessType = 'republic business';
        alertStatus = 'allow to proceed';
        
        console.log('do or do not, there is not try');
    };
    
    const pirate = function() {
        home = 'Tortuga';
        species = 'scallywag';
        businessType = 'marauder';
        alertStatus = 'observe with caution';
        console.log('This is the day you will always remember as the day you almost caught Captain Jack Sparrow');
    
    };

    const vulcan = function() {
        home = 'Vulcan';
        species = 'Vulcan';
        businessType = 'VSA Observation';
        alertStatus = 'Live long and prosper';

        console.log('fascinating');
    };

    const klingon = function () {
        home = 'Qonos';
        species = 'Klingon';
        businessType = 'Diplomatic Envoy with Starfleet';
        alertStatus = 'observe with caution';
        console.log('Qapla');
    };

    const romulan = function () {
        home = 'Romulus';
        species = 'Romulan';
        businessType = 'Meeting with Federation High Council';
        alertStatus = 'observe with caution';
        console.log('Beware Romulans bearing gifts');
    };

    const sindarin = function () {
        home = 'Lothlorien';
        species = 'Elves';
        businessType = 'Meeting with Gandalf the Grey';
        alertStatus = 'allow to proceed';
        console.log('lothlorien');
    };

    const chef = function () {
        home = 'Jim Hensons Creature Shop';
        species = 'Muppet';
        businessType = 'Cooking Convention';
        alertStatus = 'Bork Bork Bork';
        console.log('hurdy gurdy um di chicky');
    };

    const fudd = function () {
        home = 'Warner Studios';
        species = 'Human';
        businessType = 'Huntin Wabbits';
        alertStatus = 'observe with caution';
        console.log('wabbit season');
    };

    const shakespeare = function() {
        home = 'Stratford upon Avon';
        species = 'Human';
        businessType = 'Globe Theater reconstruction';
        alertStatus = 'no harm shall come to thee until Burnam Wood comes to Dunsinane';
        console.log('Beware the ides of March');
    };

    const sith = function() {
        home = 'Tortuga';
        species = 'scallywag';
        businessType = 'marauder';
        alertStatus = 'observe with Extreme caution';
        console.log('always two there are');
    };

    const gungan = function() {
        home = 'Naboo';
        species = 'Gungan';
        businessType = 'Republic Senate';
        alertStatus = 'allow to proceed';
        console.log('meesa no worry');
    };

    const huttese = function() {
        home = 'Nal-Hutta';
        species = 'Hutt';
        businessType = 'legitimate business transaction';
        alertStatus = 'observe with Extreme caution';
        console.log('tell jabba I will bring him the money');
    };
    
    const flowDirect = function() {
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
            case 'sindarin':
                sindarin();
                break;
            case 'chef':
                chef();
                break;
            case 'fudd':
                fudd();
                break;
            case 'shakespeare':
                shakespeare();
                break;
            case 'sith':
                sith();
                break;
            case 'gungan':
                gungan();
                break;
            case 'huttese':
                huttese();
                break;
        
        }
        console.log("switch");
    };
    flowDirect();

    passCard.html(`Home: ${home}<br /> Species: ${species}<br /> Business: ${businessType}<br />Alert Status: ${alertStatus}`);
    $('#passportCard').append(passCard);
};

