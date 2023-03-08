const container = document.querySelector('.container')
const seats = document.querySelectorAll('.row .seat:not(.occupied)')

const count = document.getElementById('count')
const total = document.getElementById('total')

const movieSelect = document.getElementById('movie')

let tickerPrice = +movieSelect.value;


populateUi()




// save selected movie index and price
function setMovieData(movieIndex, moviePrice){
    localStorage.setItem('selectedMovieIndex', movieIndex)
    localStorage.setItem('selectedMoviePrice', moviePrice)

}






function updateSelectedCount(){
    const selectedSeats = document.querySelectorAll('.row .seat.selected')
    const selectedSeatsCount = selectedSeats.length


    const seatIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat))

    localStorage.setItem('selectedSeats', JSON.stringify(seatIndex))

    console.log(seatIndex);


    count.innerHTML = selectedSeatsCount
    total.innerHTML = selectedSeatsCount * tickerPrice
}



// movie select event
movieSelect.addEventListener('change', e => {
    tickerPrice = +e.target.value

    setMovieData(e.target.selectedIndex, e.target.value);
    updateSelectedCount()
})






seats.forEach(element => {
    element.addEventListener('click', (e)=>{
        if (e.target.classList.contains('seat')) {
            e.target.classList.toggle('selected')
            updateSelectedCount()

        }
    });
});


// get data from local storages and populate it in ui
function populateUi(){
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'))
    console.log(selectedSeats);
    if (selectedSeats !== null && selectedSeats.length > 0) {

        seats.forEach((seat, index) =>{
            if (selectedSeats.indexOf(index) > -1){
                seat.classList.add('selected')
            }

        })
    }

    const selectMovieIndex = localStorage.getItem('selectedMovieIndex')
    if (selectMovieIndex !== null) {
        movieSelect.selectedIndex = selectMovieIndex
    }

}   

updateSelectedCount()