window.addEventListener('load', () => {
    const option = document.querySelectorAll('.options')
    console.log(option)
    const p_score =document.querySelector('#p-score')
    const c_score = document.querySelector('#c-score')
    let pri_np = 0
    let pri_nc = 0
    option.forEach((option) => {
        option.addEventListener('click', () => {
            const rps = ['Rock', 'Paper', 'Scissors']
            const rps_r = Math.floor(Math.random() * 3)
            console.log(rps[rps_r])
            const mychoice = option.value
            const computer_c = rps[rps_r]
            update_moves(mychoice, computer_c)
            compare_input(mychoice,computer_c)
            score_update( pri_np,pri_nc)
        })

    })

    function update_moves(mychoice, computer_c) {
        const p_move = document.querySelector('#p-move')
        const c_move = document.querySelector('#c-move')
        p_move.src = `./assets/${mychoice}.svg`
        c_move.src = `./assets/${computer_c}.svg`
    }
    function compare_input(mychoice, computer_c) {
        const movep = document.querySelector('#movep')
        const movec = document.querySelector('#movec')

        console.log(movep)
        if (mychoice === computer_c) {
            //alert('its a tie')
            movep.classList.remove('movewin')
            movep.classList.remove('movelose')

            movec.classList.remove('movewin')
            movec.classList.remove('movelose')

        }
        else {
            //rock
            if (mychoice === 'Rock') {
               if(computer_c==='Scissors'){
                //alert('you win')
                movep.classList.add('movewin')
                movep.classList.remove('movelose')
                
                movec.classList.remove('movewin')
                movec.classList.add('movelose')
                pri_np++
               }

               else {
                //alert ('computres win' )
                movep.classList.remove('movewin')
                movep.classList.add('movelose')
                
                movec.classList.add('movewin')
                movec.classList.remove('movelose')
                pri_nc++
            
            }
            }
            
            //paper
          else  if (mychoice === 'Paper') {
                if(computer_c==='Rock'){
                 //alert('you win')
                 movep.classList.add('movewin')
                 movep.classList.remove('movelose')
                 
                 movec.classList.remove('movewin')
                 movec.classList.add('movelose')
                 pri_np++
                }
                else {
                    //alert ('computres win' )
                    movep.classList.remove('movewin')
                    movep.classList.add('movelose')
                    
                    movec.classList.add('movewin')
                    movec.classList.remove('movelose')
                 pri_nc++
                }
             }
            
             else {
                if(computer_c==='Paper'){
                //alert('you win')
                movep.classList.add('movewin')
                movep.classList.remove('movelose')
                
                movec.classList.remove('movewin')
                movec.classList.add('movelose')
                pri_np++
               }
               else {
                   //alert ('computres win' )
                   movep.classList.remove('movewin')
                   movep.classList.add('movelose')
                   
                   movec.classList.add('movewin')
                   movec.classList.remove('movelose')
               pri_nc++
               }

             }
        }

       
        
        
    }
    function score_update(pri_np,pri_nc){
      p_score.textContent = pri_np
      c_score.textContent = pri_nc
    }
})
