const faker = require('faker');

const fakerLink = {
  'address.zipCode' : () => {faker.address.zipCode()},
  'address.zipCodeByState' : () => {faker.address.zipCodeByState()},
  'address.city' : () => {faker.address.city()},
  'address.cityPrefix' : () => {faker.address.cityPrefix()},
  'address.citySuffix' : () => {faker.address.citySuffix()},
  'address.streetName' : () => {faker.address.streetName()},
  'address.streetAddress' : () => {faker.address.streetAddress()},
  'address.streetSuffix' : () => {faker.address.streetSuffix()},
  'address.streetPrefix' : () => {faker.address.streetPrefix()},
  'address.secondaryAddress' : () => {faker.address.secondaryAddress()},
  'address.county' : () => {faker.address.county()},
  'address.country' : () => {faker.address.country()},
  'address.countryCode' : () => {faker.address.countryCode()},
  'address.state' : () => {faker.address.state()},
  'address.stateAbbr' : () => {faker.address.stateAbbr()},
  'address.latitude' : () => {faker.address.latitude()},
  'address.longitude' : () => {faker.address.longitude()},
  'address.direction' : () => {faker.address.direction()},
  'address.cardinalDirection' : () => {faker.address.cardinalDirection()},
  'address.ordinalDirection' : () => {faker.address.ordinalDirection()},
  'address.nearbyGPSCoordinate' : () => {faker.address.nearbyGPSCoordinate()},
  'address.timeZone' : () => {faker.address.timeZone()},
  
  'commerce.color' : () => {faker.commerce.color()},
  'commerce.department' : () => {faker.commerce.department()},
  'commerce.productName' : () => {faker.commerce.productName()},
  'commerce.price' : () => {faker.commerce.price()},
  'commerce.productAdjective' : () => {faker.commerce.productAdjective()},
  'commerce.productMaterial' : () => {faker.commerce.productMaterial()},
  'commerce.product' : () => {faker.commerce.product()},
  'commerce.productDescription' : () => {faker.commerce.productDescription()},
  
  'company.suffixes' : () => {faker.company.suffixes()},
  'company.companyName' : () => {faker.company.companyName()},
  'company.companySuffix' : () => {faker.company.companySuffix()},
  'company.catchPhrase' : () => {faker.company.catchPhrase()},
  'company.bs' : () => {faker.company.bs()},
  'company.catchPhraseAdjective' : () => {faker.company.catchPhraseAdjective()},
  'company.catchPhraseDescriptor' : () => {faker.company.catchPhraseDescriptor()},
  'company.catchPhraseNoun' : () => {faker.company.catchPhraseNoun()},
  'company.bsAdjective' : () => {faker.company.bsAdjective()},
  'company.bsBuzz' : () => {faker.company.bsBuzz()},
  'company.bsNoun' : () => {faker.company.bsNoun()},
  
  'database.column' : () => {faker.database.column()},
  'database.type' : () => {faker.database.type()},
  'database.collation' : () => {faker.database.collation()},
  'database.engine' : () => {faker.database.engine()},
  
  'date.past' : () => {faker.date.past()},
  'date.future' : () => {faker.date.future()},
  'date.between' : () => {faker.date.between()},
  'date.recent' : () => {faker.date.recent()},
  'date.soon' : () => {faker.date.soon()},
  'date.month' : () => {faker.date.month()},
  'date.weekday' : () => {faker.date.weekday()},
  
  'finance.account' : () => {faker.finance.account()},
  'finance.accountName' : () => {faker.finance.accountName()},
  'finance.routingNumber' : () => {faker.finance.routingNumber()},
  'finance.mask' : () => {faker.finance.mask()},
  'finance.amount' : () => {faker.finance.amount()},
  'finance.transactionType' : () => {faker.finance.transactionType()},
  'finance.currencyCode' : () => {faker.finance.currencyCode()},
  'finance.currencyName' : () => {faker.finance.currencyName()},
  'finance.currencySymbol' : () => {faker.finance.currencySymbol()},
  'finance.bitcoinAddress' : () => {faker.finance.bitcoinAddress()},
  'finance.litecoinAddress' : () => {faker.finance.litecoinAddress()},
  'finance.creditCardNumber' : () => {faker.finance.creditCardNumber()},
  'finance.creditCardCVV' : () => {faker.finance.creditCardCVV()},
  'finance.ethereumAddress' : () => {faker.finance.ethereumAddress()},
  'finance.iban' : () => {faker.finance.iban()},
  'finance.bic' : () => {faker.finance.bic()},
  'finance.transactionDescription' : () => {faker.finance.transactionDescription()},
  
  'git.branch' : () => {faker.git.branch()},
  'git.commitEntry' : () => {faker.git.commitEntry()},
  'git.commitMessage' : () => {faker.git.commitMessage()},
  'git.commitSha' : () => {faker.git.commitSha()},
  'git.shortSha' : () => {faker.git.shortSha()},
  
  'hacker.abbreviation' : () => {faker.hacker.abbreviation()},
  'hacker.adjective' : () => {faker.hacker.adjective()},
  'hacker.noun' : () => {faker.hacker.noun()},
  'hacker.verb' : () => {faker.hacker.verb()},
  'hacker.ingverb' : () => {faker.hacker.ingverb()},
  'hacker.phrase' : () => {faker.hacker.phrase()},
  
  'helpers.randomize' : () => {faker.helpers.randomize()},
  'helpers.slugify' : () => {faker.helpers.slugify()},
  'helpers.replaceSymbolWithNumber' : () => {faker.helpers.replaceSymbolWithNumber()},
  'helpers.replaceSymbols' : () => {faker.helpers.replaceSymbols()},
  'helpers.replaceCreditCardSymbols' : () => {faker.helpers.replaceCreditCardSymbols()},
  'helpers.repeatString' : () => {faker.helpers.repeatString()},
  'helpers.regexpStyleStringParse' : () => {faker.helpers.regexpStyleStringParse()},
  'helpers.shuffle' : () => {faker.helpers.shuffle()},
  'helpers.mustache' : () => {faker.helpers.mustache()},
  'helpers.createCard' : () => {faker.helpers.createCard()},
  'helpers.contextualCard' : () => {faker.helpers.contextualCard()},
  'helpers.userCard' : () => {faker.helpers.userCard()},
  'helpers.createTransaction' : () => {faker.helpers.createTransaction()},
  
  'image.image' : () => {faker.image.image()},
  'image.avatar' : () => {faker.image.avatar()},
  'image.imageUrl' : () => {faker.image.imageUrl()},
  'image.abstract' : () => {faker.image.abstract()},
  'image.animals' : () => {faker.image.animals()},
  'image.business' : () => {faker.image.business()},
  'image.cats' : () => {faker.image.cats()},
  'image.city' : () => {faker.image.city()},
  'image.food' : () => {faker.image.food()},
  'image.nightlife' : () => {faker.image.nightlife()},
  'image.fashion' : () => {faker.image.fashion()},
  'image.people' : () => {faker.image.people()},
  'image.nature' : () => {faker.image.nature()},
  'image.sports' : () => {faker.image.sports()},
  'image.technics' : () => {faker.image.technics()},
  'image.transport' : () => {faker.image.transport()},
  'image.dataUri' : () => {faker.image.dataUri()},
  'image.lorempixel' : () => {faker.image.lorempixel()},
  'image.unsplash' : () => {faker.image.unsplash()},
  'image.lorempicsum' : () => {faker.image.lorempicsum()},
  
  'internet.avatar' : () => {faker.internet.avatar()},
  'internet.email' : () => {faker.internet.email()},
  'internet.exampleEmail' : () => {faker.internet.exampleEmail()},
  'internet.userName' : () => {faker.internet.userName()},
  'internet.protocol' : () => {faker.internet.protocol()},
  'internet.url' : () => {faker.internet.url()},
  'internet.domainName' : () => {faker.internet.domainName()},
  'internet.domainSuffix' : () => {faker.internet.domainSuffix()},
  'internet.domainWord' : () => {faker.internet.domainWord()},
  'internet.ip' : () => {faker.internet.ip()},
  'internet.ipv6' : () => {faker.internet.ipv6()},
  'internet.userAgent' : () => {faker.internet.userAgent()},
  'internet.color' : () => {faker.internet.color()},
  'internet.mac' : () => {faker.internet.mac()},
  'internet.password' : () => {faker.internet.password()},
  
  'lorem.word' : () => {faker.lorem.word()},
  'lorem.words' : () => {faker.lorem.words()},
  'lorem.sentence' : () => {faker.lorem.sentence()},
  'lorem.slug' : () => {faker.lorem.slug()},
  'lorem.sentences' : () => {faker.lorem.sentences()},
  'lorem.paragraph' : () => {faker.lorem.paragraph()},
  'lorem.paragraphs' : () => {faker.lorem.paragraphs()},
  'lorem.text' : () => {faker.lorem.text()},
  'lorem.lines' : () => {faker.lorem.lines()},
  
  'name.firstName' : () => {faker.name.firstName()},
  'name.lastName' : () => {faker.name.lastName()},
  'name.findName' : () => {faker.name.findName()},
  'name.jobTitle' : () => {faker.name.jobTitle()},
  'name.gender' : () => {faker.name.gender()},
  'name.prefix' : () => {faker.name.prefix()},
  'name.suffix' : () => {faker.name.suffix()},
  'name.title' : () => {faker.name.title()},
  'name.jobDescriptor' : () => {faker.name.jobDescriptor()},
  'name.jobArea' : () => {faker.name.jobArea()},
  'name.jobType' : () => {faker.name.jobType()},
  
  'phone.phoneNumber' : () => {faker.phone.phoneNumber()},
  'phone.phoneNumberFormat' : () => {faker.phone.phoneNumberFormat()},
  'phone.phoneFormats' : () => {faker.phone.phoneFormats()},
  
  'random.number' : () => {faker.random.number()},
  'random.float' : () => {faker.random.float()},
  'random.arrayElement' : () => {faker.random.arrayElement()},
  'random.arrayElements' : () => {faker.random.arrayElements()},
  'random.objectElement' : () => {faker.random.objectElement()},
  'random.uuid' : () => {faker.random.uuid()},
  'random.boolean' : () => {faker.random.boolean()},
  'random.word' : () => {faker.random.word()},
  'random.words' : () => {faker.random.words()},
  'random.image' : () => {faker.random.image()},
  'random.locale' : () => {faker.random.locale()},
  'random.alpha' : () => {faker.random.alpha()},
  'random.alphaNumeric' : () => {faker.random.alphaNumeric()},
  'random.hexaDecimal' : faker.random.hexaDecimal(),
  
  'system.fileName' : () => {faker.system.fileName()},
  'system.commonFileName' : () => {faker.system.commonFileName()},
  'system.mimeType' : () => {faker.system.mimeType()},
  'system.commonFileType' : () => {faker.system.commonFileType()},
  'system.commonFileExt' : () => {faker.system.commonFileExt()},
  'system.fileType' : () => {faker.system.fileType()},
  'system.fileExt' : () => {faker.system.fileExt()},
  'system.directoryPath' : () => {faker.system.directoryPath()},
  'system.filePath' : () => {faker.system.filePath()},
  'system.semver' : () => {faker.system.semver()},
  
  'time.recent' : () => {faker.time.recent()},
  
  
  'vehicle.vehicle' : () => {faker.vehicle.vehicle()},
  'vehicle.manufacturer' : () => {faker.vehicle.manufacturer()},
  'vehicle.model' : () => {faker.vehicle.model()},
  'vehicle.type' : () => {faker.vehicle.type()},
  'vehicle.fuel' : () => {faker.vehicle.fuel()},
  'vehicle.vin' : () => {faker.vehicle.vin()},
  'vehicle.color' : () => {faker.vehicle.color()},
}

const types = {};
types.unique = {};
types.repeating = {};
types.unique.str = (data) => {return 'unique.string'};
types.unique.num = (data) => {return 'unique.number'};
types.repeating.loop = (data) => {return 'loop'};
types.repeating.weighted = (data) => {return 'weighted'};
types.repeating.counted = (data) => {return 'counted'}

const column = [{
  addVariable: (vars, i) => {
    vars[i] = {
      test : "Yes"
    }
  }
}];

const createVariables = (cols) => {
  let vars = [];
  cols.forEach ( (e, i) => {if (e.addVariable) e.addVariable(vars, i);} )
  return vars;
}

// const variable2 = createVariables(column);
// console.log('second', variable2);


// faker.name.lastName()


const columns = [
  {
    name : 'username',
    dataCategory : 'random', // random, repeating, unique, custom
    dataType : 'name.lastName',
    data : {
      unique : true,
      strLength : [8, 20],
    },
  }
];


const createRecordFunc = (cols) => {
  let output = [];
  cols.forEach(e => {
    const {dataCategory, dataType} = e;
    if (dataCategory === 'random') output.push(fakerLink[dataType]);
    else if (dataCategory === 'repeating' || dataCategory === 'unique') output.push(types[dataCategory][dataType]);
    // ADD OTHER DATA TYPES HERE
    else {
      console.log(`ERROR: Column ${e.name} has an invalid data type. Table will still populate but this column will be empty.`)
      output.push (() => {});
    }
  } );
  return output;
};

// console.log(createRecordFunc(columns))

const test = createRecordFunc(columns)
console.log(test[0]());


  ;



