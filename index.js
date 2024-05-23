console.log('Example 1:');

function capitalizeNames(name) {

    let nickname = '';

    for(let i = 0; i < name.length; i++)
        {

        if(i === 0)
            {
                //name[i] = name[i].toUpperCase(); // console.log(name[i]);
                nickname += name[i].toUpperCase();
            }
            else
            {
                //name[i] = name[i].toLowerCase(); // console.log(name[i]);
                nickname += name[i];
            }
        }

        return nickname;
  }
  
  console.log(capitalizeNames("emma")); 
  console.log(capitalizeNames("sam"));


  console.log('\nExample 2:');

  function capitalizeNames2(names) {
    //console.log(names[0][0]);

    let nickname = '';
    for(let i = 0; i < names.length; i++)
    {

        for(let j = 0; j < names[i].length; j++) 
        {
            
            if(j === 0)
                {
                    nickname += names[i][j].toUpperCase();
                }
                else
                {
                    nickname += names[i][j];
                }
        }
        nickname += ' ';
    }
    return nickname;
  }
  
  console.log(capitalizeNames2(["alice", "bob", "charlie"])); // ["Alice", "Bob", "Charlie"]
  console.log(capitalizeNames2(["emma", "sam", "tom"])); // ["Emma", "Sam", "Tom"]
