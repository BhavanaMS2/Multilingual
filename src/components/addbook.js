import React, { Component } from 'react';



// Complete this class
class AddBook extends Component {

  state = {
    form: {
        title: "",
        author: "",
        genre: ""
    },
    formErrorMessage: {
        title: "",
        author: "",
        genre: ""
    },
    formValidity: {
        title: false,
        author: false,
        genre: false,
        buttonActive: false
      },
    }

    handleChange = event => {
        let value=event.target.value;
        let fieldName=event.target.name;
        this.setState({[fieldName]:value});
        this.validateField(fieldName,value);
     };

    validateField = (fieldName, value) => {
      // implement this
      
      let formErrors = this.state.formErrorMessage;
      let formValidity = this.state.formValidity;
      

     //title validation
      if(fieldName==="title"){
        if(value.length<4){
        formErrors.title = "Title must be at least 4 chars";
        formValidity.title = false;
      }
         else{
        formErrors.title = "";
        formValidity.title = true;
        
      }
    }

      //author validation
      if(fieldName==="author"){
      if(value.length<3){
        formErrors.author = "Author name must have atleast 3 letters";
        formValidity.author = false;
      }
      else{
        formErrors.author = "";
        formValidity.author = true;
        
      }
    }

    if(fieldName==="genre"){
      if(value!=="Mystery Thriller" || value!=="Fiction" || value!=="Non-Fiction"){
        formErrors.genre="Please enter a valid field";
        formValidity.genre=false;
      }
      else{
        formErrors.genre="";
        formValidity.genre=true;
      }
    }

      
      this.setState({formErrors});
      this.setState({formValidity});

      if(formValidity.title==="true" && formValidity.author==="true" && formValidity.genre==="true"){
        formValidity.buttonActive=true;
      }else formValidity.buttonActive=false;
      
      
    };

    render() {
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-md-5 offset-4">
                        
                        <form style={{ border: "1px solid ", padding: "15px", borderRadius: "8px", borderColor: 'gray' }}>
                            <h2 className="text-center">Add A Book</h2>
                            
                              <div className="form-group">
                                  <label>title</label>
                                  <input className="form-control" onChange={this.handleChange} value={this.state.title} />
                              </div>
                              <span className="text-danger">{this.state.formErrorMessage.title}</span>

                              <div className="form-group">
                                  <label>author</label>
                                  <input className="form-control" onChange={this.handleChange} value={this.state.author} />
                              </div>
                              <span className="text-danger">{this.state.formErrorMessage.author}</span>

                        <div className="form-group">
                        <label>genre:</label>
                        <select onChange={this.handleChange} className="form-control" value={this.state.genre}>
                            <option value="Mystery Thriller">Mystery Thriller</option>
                            <option value="Fiction">Fiction</option>
                            <option value="Non-Fiction">Non-Fiction</option>
                            
                        </select>
                    </div>
                    <button type="button" className="btn btn-success" disabled={!this.state.formValidity}>Add Book</button><br />
                            


                        </form>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default AddBook;