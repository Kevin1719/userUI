import axios from 'axios'
import Swal from 'sweetalert2'
import './Inscription.css'
import {useState} from 'react'

function Inscription() {
  const [nom, setNom] = useState('')
  const [prenom, setPrenom] = useState('')
  const [email, setEmail] = useState('')
  const [contact, setContact] = useState('')
  const [serie, setSerie] = useState('')
  const [adresse, setAdresse] = useState('')
  const [genre, setGenre] = useState('')
  const [niveau, setNiveau] = useState('')
  const [isValid, setIsValid] = useState(false)
  const [error, setError] = useState([])

  async function handlesubmit(e){
    e.preventDefault()
    const data = {nom, prenom, email, contact, serie, adresse, niveau, genre}
    const res = await axios.post('http://localhost:8000/api/preparatoires',data);
    if(res.data.status === 200){
      Swal.fire({
        title: "Success",
        text: "Alert successful",
        icon: "success",
        confirmButtonText: "OK",
      });
    }
    else{
      setError(res.data.error)
    }
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
      <form onSubmit={handlesubmit}>
        <div className="user-details">
          <div className="input-box">
            <span className="details">Nom</span>
            <input type="text" placeholder="Entrer votre nom" value={nom}  reauired onChange={(e)=>{setNom(e.target.value)}}/>
            <span className='text-danger'>{error.nom}</span>
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
            <input type="text" placeholder="Entrer votre numéro" value={contact} required onChange={(e)=>{setContact(e.target.value)}}/>
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
        <div className="input-box">
                <span className="details">Niveau</span>
                <select name="niveau" onChange={(e)=>{setNiveau(e.target.value)}} style={{
                            width: '100%',
                            height: '45px',
                            minWidth: '15ch',
                            maxWidth: '30ch',
                            border: '1px solid #ccc',
                            borderRadius: '0.25em',
                            padding: '0.25em 0.5em',
                            fontSize: '15px',
                            cursor: 'pointer',
                            lineHeight: '1.1',
                            backgroundColor: '#fff',
                            backgroundImage: 'linear-gradient(to top, #f9f9f9, #fff 33%)'
                }}>
                  <option value="N/A">N/A</option>
                  <option value="L1">L1</option>
                  <option value="L2">L2</option>
                  <option value="L3">L3</option>
                  <option value="M1">M1</option>
                  <option value="M2">M2</option>
                </select>
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
          <input type="submit" value="S'inscrire"  disabled={isValid}/>
        </div>
      </form>
    </div>
  </div>
  </div>

  )
}

export default Inscription