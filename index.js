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
  , '@(\'_\')@'
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

  console.rofl = function(){
    var copter = function (text) {
      return [
        ' ROFL:ROFL:ROFL:ROFL',
        '         _^___',
        ' L    __/   [] \\ ',
        'LOL===__        \\     ' + text,
        ' L      \\________] ',
        '         I   I',
        '       --------/',
      ];
    }

    copter(Array.prototype.join.call(arguments, ' '))
      .forEach(function (line) {
        console.log(line);
      });
  };
})();
