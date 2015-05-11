(function(){
  var lols = [
    '(╯°□°)╯︵ ┻━┻'
  , '¯\_(ツ)_/¯'
  , 'ಠ_ಠ'
  , 'ʕ •ᴥ•ʔ'
  , '(●°u°●)​ 」'
  , 'ლ(ಠ益ಠლ)'
  , '(͡°͜ʖ͡°)'
  , '(>ლ)'
  , '(╯︵╰,)'
  , '@('_')@'
  , 'ʕʘ̅͜ʘ̅ʔ'
  , '( •_•) ( •_•)>⌐■-■ (⌐■_■)'
  , 'ۜ\(סּںסּَ` )/ۜ'
  , 'ˁ(⦿ᴥ⦿)ˀ'
  ];

  console.lol = function(){
    Array.prototype.unshift.call(
      arguments
    , lols[ Math.floor(Math.random() * lols.length) ]
    );

    console.log.apply( console, arguments );
  };
})();