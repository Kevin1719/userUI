import './Candidature.css'
import { useState } from 'react';
import axios from "axios";
import Swal from 'sweetalert2'
import { MDBFile } from 'mdb-react-ui-kit';

function Candidature() {
    const [nom, setNom] = useState('')
    const [prenom, setPrenom] = useState('')
    const [dateDeNaissance, setDateDeNaissance] = useState('')
    const [lieuDeNaissance, setLieuDeNaissance] = useState('')
    const [nationalite, setNationalite] = useState('')
    const [situationFamiliale, setSituationFamiliale] = useState('')
    const [nombreEnfant, setNombreEnfant] = useState('')
    const [adresse, setAdresse] = useState('')
    const [email, setEmail] = useState('')
    const [contact, setContact] = useState('')
    const [genre, setGenre] = useState('')
    const [serie, setSerie] = useState('')
    const [error, setError] = useState([])

    const [nomPere, setNomPere] = useState('')
    const [telPere, setTelephonePere] = useState('')
    const [professionPere, setProfessionPere] = useState('')
    const [nomMere, setNomMere] = useState('')
    const [telMere, setTelephoneMere] = useState('')
    const [professionMere, setProfessionMere] = useState('')
    const [nomTuteur, setNomTuteur] = useState('')
    const [telTuteur, setTelephoneTuteur] = useState('')
    const [professionTuteur, setProfessionTuteur] = useState('')

    const [nbrStage,setNbrStage] = useState('')
    const [entrepriseStage,setEntrepriseStage] = useState('')
    const [nbrAlternance,setNbrAlternance] = useState('')
    const [entrepriseAlternance,setEntrepriseAlternance] = useState('')

    const [travauxPerso,setTravauxPerso] = useState('')
    const [activiteParaPro,setActiviteParaPro] = useState('')

    const [postule,setPostule] = useState('')
    const [parcours,setParcours] = useState('')

    const [selectedDiplome, setSelectedDiplome] = useState(null)
    const [selectedReleveDeNoteBacc,setSelectedReleveDuBacc] = useState(null)
    const [selectedReleveDeNoteSeconde,setSelectedReleveDeNoteSeconde] = useState(null)
    const [selectedReleveDeNotePremiere,setSelectedReleveDeNotePremiere] = useState(null)
    const [selectedReleveDeNoteTerminale,setSelectedReleveDeNoteTerminale] = useState(null)
    const [certificatDeResidance,setCertificatDeResidance] = useState(null)
    const [selectedPhoto,setSelectedPhotoIdentite] = useState(null)
    const [selectedCINorCIS,setSelectedCINorCIS] = useState(null)
    const [cv,setCV] = useState(null)
    const [bordereauEsti,setBordereauEsti] = useState(null)

    const handleSubmit = async(e) => {
        e.preventDefault();
        
        console.log({
            nom,prenom,dateDeNaissance,lieuDeNaissance,serie,nationalite,
            situationFamiliale,nombreEnfant,adresse,email,contact,genre,
            nomPere, nomMere, nomTuteur,
            telPere, telMere, telTuteur,
            professionPere, professionMere, professionTuteur,
            nbrStage, entrepriseStage, nbrAlternance, entrepriseAlternance,
            travauxPerso, activiteParaPro,
            postule, parcours, selectedDiplome,selectedReleveDeNoteBacc,selectedReleveDeNoteSeconde,
            selectedReleveDeNotePremiere,selectedReleveDeNoteTerminale, certificatDeResidance,
            selectedPhoto, selectedCINorCIS, cv, bordereauEsti
        })
        
        const formData = new FormData(); 

        formData.append("nom", nom)
        formData.append("prenom", prenom)
        formData.append("dateDeNaissance",  dateDeNaissance)
        formData.append("lieuDeNaissance", lieuDeNaissance)
        formData.append("nationalite", nationalite, )
        formData.append("nombreEnfant" ,nombreEnfant)
        formData.append("situationFamiliale", situationFamiliale)
        formData.append("adresse", adresse)
        formData.append("contact", contact)
        formData.append("email", email)
        formData.append("genre", genre)
        formData.append("serie", serie)

        formData.append("nomPere",nomPere)
        formData.append("nomMere",nomMere)
        formData.append("nomTuteur",nomTuteur)
        formData.append("telPere",telPere)
        formData.append('telMere', telMere)
        formData.append('telTuteur',telTuteur)
        formData.append('professionPere',professionPere)
        formData.append('professionMere',professionMere)
        formData.append('professionTuteur',professionTuteur)

        formData.append('nbrStage',nbrStage)
        formData.append('entrepriseStage', entrepriseStage)
        formData.append('nbrAlternance',nbrAlternance)
        formData.append('entrepriseAlternance', entrepriseAlternance)

        formData.append('travauxPerso', travauxPerso)
        formData.append('activiteParaPro', activiteParaPro)

        formData.append('postule', postule)
        formData.append('parcours', parcours)

        formData.append('selectedDiplome',selectedDiplome)
        formData.append('selectedReleveDeNoteBacc', selectedReleveDeNoteBacc)
        formData.append('selectedReleveDeNoteSeconde',selectedReleveDeNoteSeconde)
        formData.append('selectedReleveDeNotePremiere',selectedReleveDeNotePremiere)
        formData.append('selectedReleveDeNoteTerminale',selectedReleveDeNoteTerminale)
        formData.append('certificatDeResidance',certificatDeResidance)
        formData.append('selectedPhoto',selectedPhoto)
        formData.append('selectedCINorCIS',selectedCINorCIS)
        formData.append('cv',cv)
        formData.append('bordereauEsti',bordereauEsti)
        
        const res = await axios({
            method: "post",
            url: "http://localhost:8000/api/candidats",
            data: formData,
            headers: {'Content-Type': 'multipart/form-data' }
        });

        if(res.data.success === 1){
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Inscription réussie'
            })
        }
        else{
            setError(res.data.validate_err)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Veuillez bien remplir le formulaire!'
            })
        }
    }
    return (
        <div className="main">
            <div class="container">
                <header>Inscription</header>
                <form onSubmit={handleSubmit}>
                    <div className="form first">
                        <div className="InfoPerso">
                            <span class="title">Informations personnelles</span>

                            <div className="fields">
                                <div className="input-field">
                                    <label>Nom</label>
                                    <input type="text" placeholder="Nom" value={nom} onChange={e=>{setNom(e.target.value)}} />
                                    <span className='text-danger'>{error.nom}</span>
                                </div>
                                <div className="input-field">
                                    <label>Prénom</label>
                                    <input type="text" placeholder="Prénom" value={prenom} onChange={e=>{setPrenom(e.target.value)}} />
                                    <span className='text-danger'>{error.prenom}</span>
                                </div>

                                <div className="input-field">
                                    <label>Date de naissance</label>
                                    <input type="date" placeholder="Date de naissance" value={dateDeNaissance} onChange={e=>{setDateDeNaissance(e.target.value)}} />
                                    <span className='text-danger'>{error.dateDeNaissance}</span>
                                </div>

                                <div className="input-field">
                                    <label>Lieu de naissance</label>
                                    <input type="text" placeholder="Lieu de naissance" value={lieuDeNaissance} onChange={e=>{setLieuDeNaissance(e.target.value)}}  />
                                    <span className='text-danger'>{error.lieuDeNaissance}</span>
                                </div>

                                <div className="input-field">
                                    <label>Série du Bacc</label>
                                    <input type="text" placeholder="Serie du Bacc" value={serie} onChange={e=>{setSerie(e.target.value)}}  />
                                    <span className='text-danger'>{error.serie}</span>
                                </div>

                                <div className="input-field">
                                    <label>Nationalité</label>
                                    <input type="text" placeholder="Nationalité" value={nationalite} onChange={e=>{setNationalite(e.target.value)}} />
                                    <span className='text-danger'>{error.nationalite}</span>
                                </div>

                                <div className="input-field">
                                    <label>Situation matrimoniale</label>
                                    <select onChange={e=>{setSituationFamiliale(e.target.value)}} >
                                        <option disabled selected>Selectionner votre situation</option>
                                        <option value={"Célibataire"}>Célibataire</option>
                                        <option value={"Marié(e)"}>Marié(e)</option>
                                        <option value={"Veuf(ve)"}>Veuf(ve)</option>
                                    </select>
                                    <span className='text-danger'>{error.situationFamiliale}</span>
                                </div>

                                <div className="input-field">
                                    <label>Nombre d'enfant</label>
                                    <input type="number" placeholder="Nombre d'enfant" value={nombreEnfant} onChange={e=>{setNombreEnfant(e.target.value)}} />
                                    <span className='text-danger'>{error.nombreEnfant}</span>
                                </div>

                                <div className="input-field">
                                    <label>Adresse personnel</label>
                                    <input type="text" placeholder="Adresse personnel" value={adresse} onChange={e=>{setAdresse(e.target.value)}} />
                                    <span className='text-danger'>{error.adresse}</span>
                                </div>

                                <div className="input-field">
                                    <label>Numéro de téléphone</label>
                                    <input type="text" placeholder="Adresse personnel" value={contact} onChange={e=>{setContact(e.target.value)}} />
                                    <span className='text-danger'>{error.contact}</span>
                                </div>

                                <div className="input-field">
                                    <label>Email</label>
                                    <input type="text" placeholder="Adresse personnel" value={email} onChange={e=>{setEmail(e.target.value)}} />
                                    <span className='text-danger'>{error.email}</span>
                                </div>

                                <div className="input-field">
                                    <label>Genre</label>
                                    <select onChange={e=>{setGenre(e.target.value)}} >
                                        <option disabled selected>Selectionner genre</option>
                                        <option value={"G"}>Homme</option>
                                        <option value={"F"}>Femme</option>
                                    </select>
                                    <span className='text-danger'>{error.genre}</span>
                                </div>
                                
                            </div>
                        </div>

                        <div className="InfoParents">
                            <span className="title">Information sur les parents</span>

                            <div className="fields">
                                <div className="input-field">
                                    <label>Nom du père</label>
                                    <input type="text" placeholder="Nom complet" value={nomPere} onChange={e=>setNomPere(e.target.value)}/>
                                </div>

                                <div className="input-field">
                                    <label>Téléphone</label>
                                    <input type="number" placeholder="Téléphone" value={telPere} onChange={e=>setTelephonePere(e.target.value)}/>
                                </div>

                                <div className="input-field">
                                    <label>Profession</label>
                                    <input type="text" placeholder="Profession" value={professionPere} onChange={e=>setProfessionPere(e.target.value)}/>
                                </div>

                                <div className="input-field">
                                    <label>Nom de la mère</label>
                                    <input type="text" placeholder="Nom complet" value={nomMere} onChange={e=>setNomMere(e.target.value)}/>
                                </div>

                                <div className="input-field">
                                    <label>Téléphone</label>
                                    <input type="number" placeholder="Téléphone" value={telMere} onChange={e=>setTelephoneMere(e.target.value)} />
                                </div>
                                
                                <div className="input-field">
                                    <label>Profession</label>
                                    <input type="text" placeholder="Profession" value={professionMere} onChange={e=>setProfessionMere(e.target.value)} />
                                </div>
                               
                                <div className="input-field">
                                    <label>Nom du tuteur</label>
                                    <input type="text" placeholder="Nom complet" value={nomTuteur} onChange={e=>setNomTuteur(e.target.value)} />
                                </div>

                                <div className="input-field">
                                    <label>Téléphone</label>
                                    <input type="number" placeholder="Téléphone" value={telTuteur} onChange={e=>setTelephoneTuteur(e.target.value)} />
                                </div>

                                <div className="input-field">
                                    <label>Profession</label>
                                    <input type="text" placeholder="Profession" value={professionTuteur} onChange={e=>setProfessionTuteur(e.target.value)} />
                                </div>

                            </div>
                        </div> 
                    
                        <div className="ActivitePro">
                            <span className="title">Activités professionnelles(s'il a lieu)</span>

                            <div className="fields">
                                <div className="input-field">
                                    <label>Nombre de Stage</label>
                                    <input type="number" placeholder="Nombre de Stage" value={nbrStage} onChange={e=>{setNbrStage(e.target.value)}} />
                                </div>

                                <div className="input-field">
                                    <label>Nom(s) d'entreprise</label>
                                    <input type="text" placeholder="Entreprise" value={entrepriseStage} onChange={e=>{setEntrepriseStage(e.target.value)}} />
                                </div>

                                <div className="input-field">
                                    <label>Nombre d'alternance</label>
                                    <input type="text" placeholder="Nombre d'alternance" value={nbrAlternance} onChange={e=>{setNbrAlternance(e.target.value)}} />
                                </div>

                                <div className="input-field">
                                    <label>Nom(s) d'entreprise</label>
                                    <input type="text" placeholder="Entreprise" value={entrepriseAlternance} onChange={e=>{setEntrepriseAlternance(e.target.value)}} />
                                </div>
                            </div>
                        </div>

                        <div className="ActiviteHobby">
                            <span className="title">Activités et centres d'intérêt</span>
                                <div className="fields">
                                    <div className="input-field">
                                        <label>Indiquez les travaux personnels que vous avez réalisés ou les travaux collectifs auxquels vous avez participé (mémoires de recherche, articles de revues et de journaux, livres, etc.) :</label>
                                        <textarea placeholder="Description" value={travauxPerso} onChange={e=>{setTravauxPerso(e.target.value)}}/>
                                    </div>

                                    <div className="input-field">
                                        <label style={{marginBottom:'20px'}}>Indiquez les activités autres que professionnelles ou d’études dans lesquelles vous vous êtes impliqué (associations…) :</label>
                                        <textarea placeholder="Description" value={activiteParaPro} onChange={e=>{setActiviteParaPro(e.target.value)}}/>
                                    </div>
                                </div>
                        </div>

                        <div className="Candidature">
                            <span className="title">Candidature</span>

                            <div className="fields">
                                <div className="input-field">
                                    <label></label>
                                    <select onChange={e=>{setPostule(e.target.value)}}>
                                        <option disabled selected>Selectionner le niveau</option>
                                        <option value={'L1'}>L1</option>
                                        <option value={'L2'}>L2</option>
                                        <option value={'L3'}>L3</option>
                                        <option value={'M1'}>M1</option>
                                        <option value={'M2'}>M2</option>
                                    </select>
                                    <span className='text-danger'>{error.postule}</span>
                                </div>
                                <div className="input-field">
                                    <label></label>
                                    <select onChange={e=>{setParcours(e.target.value)}}>
                                        <option disabled selected>Parcours</option>
                                        <option value={'Choix non fixé'}>Choix non fixé</option>
                                        <option value={'Réseau et système'}>Réseau et système</option>
                                        <option value={'Intégration et développement'}>Intégration et développement</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="Pièces jointes">
                            <span className="title">Pièces jointes</span>

                            <div className="fields">
                                <div className="input-field">
                                    <label>Diplôme certifié du Baccalauréat</label>
                                    <MDBFile size='lg' style={{border:'none'}} onChange={e =>{setSelectedDiplome(e.target.files[0])}}/>
                                </div>

                                <div className="input-field">
                                    <label>Relevé de notes certifié du Baccalauréat</label>
                                    <MDBFile size='lg' style={{border:'none'}} onChange={e =>{setSelectedReleveDuBacc(e.target.files[0])}}/>
                                </div>

                                <div className="input-field">
                                    <label>Relevé de notes 2nd</label>
                                    <MDBFile size='lg' style={{border:'none'}} onChange={e =>{setSelectedReleveDeNoteSeconde(e.target.files[0])}}/>
                                </div>

                                <div className="input-field">
                                    <label>Relevé de notes 1ère</label>
                                    <MDBFile size='lg' style={{border:'none'}} onChange={e =>{setSelectedReleveDeNotePremiere(e.target.files[0])}}/>
                                </div>
                                
                                <div className="input-field">
                                    <label>Relevé de notes Tle</label>
                                    <MDBFile size='lg' style={{border:'none'}} onChange={e =>{setSelectedReleveDeNoteTerminale(e.target.files[0])}}/>
                                </div>

                                <div className="input-field">
                                    <label>Certificat de résidence</label>
                                    <MDBFile size='lg' style={{border:'none'}} onChange={e =>{setCertificatDeResidance(e.target.files[0])}}/>
                                </div>

                                <div className="input-field">
                                    <label>Photo d'identité</label>
                                    <MDBFile size='lg' style={{border:'none'}} onChange={e =>{setSelectedPhotoIdentite(e.target.files[0])}}/>
                                </div>

                                <div className="input-field">
                                    <label>CIN certifiée ou CIS</label>
                                    <MDBFile size='lg' style={{border:'none'}} onChange={e =>{setSelectedCINorCIS(e.target.files[0])}}/>
                                </div>

                                <div className="input-field">
                                    <label>Curriculum Vitae (CV)</label>
                                    <MDBFile size='lg' style={{border:'none'}} onChange={e =>{setCV(e.target.files[0])}}/>
                                </div>

                                <div className="input-field">
                                    <label>Bordereau d'inscription</label>
                                    <MDBFile size='lg' style={{border:'none'}} onChange={e =>{setBordereauEsti(e.target.files[0])}}/>
                                </div>
                            </div>
                            <div className="buttons">
                                <button className="sumbit">
                                    <span className="btnText">S'inscrire</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Candidature