export default function Contact() {
    return (
        <form>
            <div className="input-group mb-3">
                <label className="input-group-text" htmlFor="name">Name</label>
                <input type="text" id="name" className="form-control" aria-label="Name input" required/>
            </div>

            <div className="input-group mb-3">
                <label className="input-group-text" htmlFor="email">Email Address</label>
                <input type="email" id="email" className="form-control" aria-label="Email input" required/>
            </div>

            <div className="input-group mb-3">
                <label className="input-group-text" htmlFor="message">Message</label>
                <textarea id="message" className="form-control" aria-label="Message input" rows="4" required></textarea>
            </div>

            <div className="col-12">
                <button className="btn btn-primary" type="submit">Submit form</button>
            </div>
        </form>
    );
}
