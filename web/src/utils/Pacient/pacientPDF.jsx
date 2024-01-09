import dayjs from "dayjs";
import * as pdfMake from "pdfmake/build/pdfmake";

function pacientPDF(pacients) {
  
  pdfMake.fonts = {
    Roboto: {
      normal: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Regular.ttf',
     bold: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Medium.ttf',
     italics: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Italic.ttf',
     bolditalics: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-MediumItalic.ttf'
   }
  };
 
  const pdfTitle = [
    {
      text: 'Dados do Paciente',
      alignment: 'center',
      fontSize: '18',
      bold: true,
      margin: [20,20,0,45]
    }
  ];

  const dados = pacients.map((pacient) => {
    return [
      {
        alignment: 'left',
        margin: [70,20,0,5],
        columns: [
          {
            text: [
              {text: 'Nome: ', fontSize: 14, bold: true},
              pacient.name, 
            ]
          },
          {
            text: [
              {text: 'Data de Nascimento: ', fontSize: 14, bold: true},
              dayjs(pacient.dateOfBirth).format('DD/MM/YYYY'),    
            ]
          }
        ],
      },
      {
        alignment: 'left',
        margin: [70,15,0,5],
        columns: [
          {
            text: [
              {text: 'CEP: ', fontSize: 14, bold: true},
              pacient.addressCep, 
            ]
          },
          {
            text: [
              {text: 'Telefone: ', fontSize: 14, bold: true},
              pacient.fone,    
            ]
          }
        ],
      },
      {
        alignment: 'left',
        margin: [70,15,0,5],
        columns: [
          {
            text: [
              {text: 'Rua: ', fontSize: 14, bold: true},
              pacient.addressRoad, 
            ]
          },
          {
            text: [
              {text: 'Número: ', fontSize: 14, bold: true},
              pacient.addressNumber,    
            ]
          }
        ],
      },
      {
        alignment: 'left',
        margin: [70,15,0,5],
        columns: [
          {
            text: [
              {text: 'Complemento: ', fontSize: 14, bold: true},
              pacient.addressComplement, 
            ]
          },
        ],
      },
      {
        alignment: 'left',
        margin: [70,15,0,5],
        columns: [
          {
            text: [
              {text: 'Bairro: ', fontSize: 14, bold: true},
              pacient.addressDistrict, 
            ]
          },
          {
            text: [
              {text: 'Cidade: ', fontSize: 14, bold: true},
              pacient.addressCity,    
            ]
          }
        ],
      },
    ]
  })

  function pdfRodape(currentPage, pageCount){
    return [
      {
      text: currentPage + ' / ' + pageCount,
      alignment: 'right',
      fontSize: '10',
      margin: [0, 10, 20, 0]
      }
    ]
  };

  const docDefinitions = {
    pageSize: 'A4',
    pageMargins: [15, 50, 15, 40],
    defaultStyle: {
      font: 'Roboto'
    },

    header: [pdfTitle],
    content: [dados],
    footer: pdfRodape
  }

  pdfMake.createPdf(docDefinitions).open();
}

export default pacientPDF