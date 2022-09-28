import './Inscription.css'
import {useState, UseEffect} from 'react'
function Inscription() {
  const [nom, setNom] = useState('')
  const [prenom, setPrenom] = useState('')
  const [email, setEmail] = useState('')
  const [telephone, setTelephone] = useState('')
  const [serie, setSerie] = useState('')
  const [adresse, setAdresse] = useState('')
  const [genre, setGenre] = useState('')
  const [isValid, setIsValid] = useState(false)

  const handlesubmit = () => {
    console.log({nom, prenom, email, telephone, serie, adresse, genre})
  }
  const handleChange = e => {
    const target = e.target;
    if (target.checked) {
      setGenre(target.value);
    }
 };
  return (
    <div className='conteneur'>
    <div className="container1">
    <div className="title">Cours Préparatoire</div>
    <div className="content">
      <form action="#">
        <div className="user-details">
          <div className="input-box">
            <span className="details">Nom</span>
            <input type="text" placeholder="Entrer votre nom" value={nom} required onChange={(e)=>{setNom(e.target.value)}}/>
          </div>
          <div className="input-box">
            <span className="details">Prénom</span>
            <input type="text" placeholder="Entrer votre prénom" value={prenom} required onChange={(e)=>{setPrenom(e.target.value)}}/>
          </div>
          <div className="input-box">
            <span className="details">Email</span>
            <input type="email" placeholder="Entrer votre email" value={email} required onChange={(e)=>{setEmail(e.target.value)}}/>
          </div>
          <div className="input-box">
            <span className="details">Numéro de téléphone</span>
            <input type="number" placeholder="Entrer votre numéro" value={telephone} required onChange={(e)=>{setTelephone(e.target.value)}}/>
          </div>
          <div className="input-box">
            <span className="details">Série au baccalauréat</span>
            <input type="text" placeholder='Entrer votre série du bacc' value={serie} required onChange={(e)=>{setSerie(e.target.value)}}/>
          </div>
          <div className="input-box">
            <span className="details">Adresse</span>
            <input type="text" placeholder="Entrer votre addresse" value={adresse}required  onChange={(e)=>{setAdresse(e.target.value)}}/>
          </div>
        </div>
        <div className="gender-details">
          <input type="radio" value="Homme" checked={genre === 'Homme'} onChange={handleChange} name="genre" id="dot-1"/>
          <input type="radio" value="Femme" checked={genre === 'Femme'} onChange={handleChange} name="genre" id="dot-2"/>
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
          <input type="submit" value="S'inscrire" onClick={handlesubmit} disabled={isValid}/>
        </div>
      </form>
    </div>
  </div>
  </div>

  )
}

export default Inscription