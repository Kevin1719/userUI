import './Inscription.css'
function Inscription() {
  return (
    <div className='conteneur'>
    <div className="container1">
    <div className="title">Cours Préparatoire</div>
    <div className="content">
      <form action="#">
        <div className="user-details">
          <div className="input-box">
            <span className="details">Nom</span>
            <input type="text" placeholder="Entrer votre nom" required/>
          </div>
          <div className="input-box">
            <span className="details">Prénom</span>
            <input type="text" placeholder="Entrer votre prénom" required/>
          </div>
          <div className="input-box">
            <span className="details">Email</span>
            <input type="email" placeholder="Entrer votre email" required/>
          </div>
          <div className="input-box">
            <span className="details">Numéro de téléphone</span>
            <input type="number" placeholder="Entrer votre numéro" required/>
          </div>
          <div className="input-box">
            <span className="details">Date de naissance</span>
            <input type="date"required/>
          </div>
          <div className="input-box">
            <span className="details">Adresse</span>
            <input type="text" placeholder="Entrer votre addresse" required />
          </div>
        </div>
        <div className="gender-details">
          <input type="radio" name="gender" id="dot-1"/>
          <input type="radio" name="gender" id="dot-2"/>
          <input type="radio" name="gender" id="dot-3"/>
          <span className="gender-title">Genre</span>
          <div className="category">
            <label htmlFor="dot-1">
            <span className="dot one"></span>
            <span className="gender">Homme</span>
          </label>
          <label htmlFor="dot-2">
            <span className="dot two"></span>
            <span className="gender">Femme</span>
          </label>
          </div>
        </div>
        <div className="button">
          <input type="submit" value="S'inscrire"/>
        </div>
      </form>
    </div>
  </div>
  </div>

  )
}

export default Inscription