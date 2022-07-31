import './ContactForm.css'

function ContactForm(){
    function form(e){
        e.preventDefault();
    }
    return <form className='contactForm' onClick={form}>
   <label htmlFor="name">Name</label>
   <input type="text" id="name"></input><br/><br/>
   <label htmlFor="email">Email</label>
   <input type="text" id="email"></input><br/><br/>
   <label htmlFor="mess" >Tell</label>
   <textarea id='mess'></textarea><br/><br/>
   <input type="submit"/>
    </form>;
}
export default ContactForm;