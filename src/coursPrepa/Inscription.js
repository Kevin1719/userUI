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
  const [error, setError] = useState([])
  const handleChange = e => {
    e.preventDefault()
    const target = e.target;
    if (target.checked) {
      setGenre(target.value);
    }
 };
  const handlesubmit = async (e) => {
    e.preventDefault()
    const data = {nom, prenom, email, contact, serie, adresse, niveau, genre}
    /*console.log(data)
    fetch('http://localhost:8000/api/preparatoires',{
      method:'POST',
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(data)
    }).then((res)=>{
      if(res.status === 200){
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Inscription avec succès',
          timer: 1500
        });setNom('')
        setPrenom('')
        setEmail('')
        setContact('')
        setSerie('')
        setAdresse('')
        setNiveau('')
        setGenre('')
      }
      else{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: '<a href="">Why do I have this issue?</a>'
        })
      }
      
    }).catch(err=>console.error(err))*/
    const res = await axios.post('http://localhost:8000/api/preparatoires',data);
    
    if(res.data.success === 'Inscription reussie'){
      console.log(res.data.success)
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: res.data.success,
        timer: 1500
      })
      setNom('')
      setPrenom('')
      setEmail('')
      setContact('')
      setSerie('')
      setAdresse('')
      setNiveau('')
      setGenre('')

    }
    else if(res.data.validate_err){
      setError(res.data.validate_err)
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href="">Why do I have this issue?</a>'
      })
    }
  }
  return (
    <div className='conteneur'>
    <div className="container1">
    <div className="title">Cours Préparatoire</div>
    <div className="content">
      <form onSubmit={handlesubmit}>
        <div className="user-details">
          <div className="input-box">
            <span className="details">Nom</span>
            <input type="text" placeholder="Entrer votre nom" value={nom} onChange={(e)=>{setNom(e.target.value)}}/>
            <span className='text-danger'>{error.nom}</span>
          </div>
          <div className="input-box">
            <span className="details">Prénom</span>
            <input type="text" placeholder="Entrer votre prénom" value={prenom} onChange={(e)=>{setPrenom(e.target.value)}}/>
          </div>
          <div className="input-box">
            <span className="details">Email</span>
            <input type="email" placeholder="Entrer votre email" value={email}  onChange={(e)=>{setEmail(e.target.value)}}/>
            <span className='text-danger'>{error.email}</span>
          </div>
          <div className="input-box">
            <span className="details">Numéro de téléphone</span>
            <input type="text" placeholder="Entrer votre numéro" value={contact}  onChange={(e)=>{setContact(e.target.value)}}/>
            <span className='text-danger'>{error.contact}</span>
          </div>
          <div className="input-box">
            <span className="details">Série au baccalauréat</span>
            <input type="text" placeholder='Entrer votre série du bacc' value={serie}  onChange={(e)=>{setSerie(e.target.value)}}/>
            <span className='text-danger'>{error.serie}</span>
          </div>
          <div className="input-box">
            <span className="details">Adresse</span>
            <input type="text" placeholder="Entrer votre addresse" value={adresse}   onChange={(e)=>{setAdresse(e.target.value)}}/>
            <span className='text-danger'>{error.adresse}</span>
          </div>
        </div>
        <div className="input-box">
                <span className="details">Niveau</span>
                <select name="niveau" onChange={(e)=>{e.preventDefault();setNiveau(e.target.value)}} style={{
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
                <span className='text-danger'>{error.niveau}</span>
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
          <span className='text-danger'>{error.genre}</span>
          </div>
        </div>
        <div className="button">
          <input type="submit" value="S'inscrire" />
        </div>
      </form>
    </div>
  </div>
  </div>

  )
}

export default Inscription