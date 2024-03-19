function createHome() {
    const content = document.querySelector('#content')

    const home = document.createElement('div')
    const heading = document.createElement('h1')
    const subheading = document.createElement('p')
    const bookingBtn = document.createElement('button')

    heading.classList.add('heading')
    subheading.classList.add('subheading')
    bookingBtn.classList.add('booking-btn')

    heading.textContent = 'GOURMET PLAZA'
    subheading.textContent = 'French Restaraunt'
    bookingBtn.textContent = 'Book a Table'

    home.append(heading, subheading, bookingBtn)

    content.appendChild(home)
}

export default createHome