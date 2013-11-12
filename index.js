(function(){
  var lols = [
    '(╯°□°)╯︵ ┻━┻'
  , '¯\_(ツ)_/¯'
  , 'ಠ_ಠ'
  , 'ʕ •ᴥ•ʔ'
  , '(●°u°●)​ 」'
  , 'ლ(ಠ益ಠლ)'
  ];

  console.lol = function(){
    Array.prototype.unshift.call(
      arguments
    , lols[ ~~(Math.random() * lols.length) ]
    );

    console.log.apply( console, arguments );
  };
})();