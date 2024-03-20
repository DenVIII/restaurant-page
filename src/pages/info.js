function createInfo() {
    const content = document.querySelector('#content')

    const info = document.createElement('div')
    const about = document.createElement('div')
    const contact = document.createElement('div')

    info.classList.add('info')
    about.classList.add('about')
    contact.classList.add('contact')

    about.innerHTML = `
        <h2 class="title">About Us:</h2>
        <p>Gourmet Plaza is not just a restaurant, it is a place where you can enjoy delicious French cuisine. Our chefs pay special attention to the quality of products and careful observance of recipes so that you can enjoy the taste of real France.</p>
        <br>
        <p>We offer not only traditional dishes, but also original interpretations of classic recipes. For example, our chef can cook for you the most delicate foie gras with truffle sauce or a baguette melting in your mouth with fragrant butter. And if you prefer something more exotic, then try our signature dish - duck with oranges and honey.</p>
    `

    contact.innerHTML = `
        <h2 class="title">Our contacts:</h2>
        <p id="telephone">Phone: 555-555-5554</p>
        <p id="email">Email: michelle@plaza.com</p>
    `

    info.append(about, contact)
    content.appendChild(info)
}

export default createInfo