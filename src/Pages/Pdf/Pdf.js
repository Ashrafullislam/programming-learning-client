import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import jsPDF  from 'jspdf';

class Pdf extends Component {
    pdfGenerate = ({course}) => {
        
        const doc = new jsPDF('landscape','px','a4','false');
        doc.addImage()

    }
    render() {
        return (
            <div style={{textAlign:'center'}}>
                <Button onClick={this.pdfGenerate}> Download Pdf </Button>
            </div>
        );
    }
}

export default Pdf;