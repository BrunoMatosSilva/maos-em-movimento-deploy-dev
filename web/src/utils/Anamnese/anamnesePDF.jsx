import dayjs from "dayjs";
import * as pdfMake from "pdfmake/build/pdfmake";

function anamnesePDF(pacients) {

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
      text: 'Ficha de Anamnese',
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
        margin: [25,20,0,5],
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
        margin: [25,15,0,5],
        columns: [
          {
            text: [
              {text: 'Fumante: ', fontSize: 14, bold: true},
              pacient.Anamnese.smoker, 
            ]
          },
          {
            text: [
              {text: 'Diabético(a): ', fontSize: 14, bold: true},
              pacient.Anamnese.diabete,    
            ]
          },
          {
            text: [
              {text: 'Alergia: ', fontSize: 14, bold: true},
              pacient.Anamnese.allergy,    
            ]
          }
        ],
      },
      {
        alignment: 'left',
        margin: [25,5,0,5],
        columns: [
          {
            text: [
              {text: 'Gestante: ', fontSize: 14, bold: true},
              pacient.Anamnese.pregnant, 
            ]
          },
          {
            text: [
              {text: 'Hipertenso(a): ', fontSize: 14, bold: true},
              pacient.Anamnese.hypertension,    
            ]
          },
          {
            text: [
              {text: 'Anemia: ', fontSize: 14, bold: true},
              pacient.Anamnese.anaemia,    
            ]
          }
        ],
      },
      {
        alignment: 'left',
        margin: [25,5,0,5],
        columns: [
          {
            text: [
              {text: 'Enxaqueca: ', fontSize: 14, bold: true},
              pacient.Anamnese.headecha, 
            ]
          },
          {
            text: [
              {text: 'Stress: ', fontSize: 14, bold: true},
              pacient.Anamnese.stress,    
            ]
          },
          {
            text: [
              {text: 'Dor na Perna: ', fontSize: 14, bold: true},
              pacient.Anamnese.legPain,    
            ]
          }
        ],
      },
      {
        alignment: 'left',
        margin: [25,5,0,5],
        columns: [
          {
            text: [
              {text: 'Insônia: ', fontSize: 14, bold: true},
              pacient.Anamnese.insomnia, 
            ]
          },
          {
            text: [
              {text: 'Doença circulatória: ', fontSize: 14, bold: true},
              pacient.Anamnese.circulatory,    
            ]
          },
          {
            text: [
              {text: 'Dor na Coluna: ', fontSize: 14, bold: true},
              pacient.Anamnese.backPain,    
            ]
          }
        ],
      },

      {
        alignment: 'left',
        margin: [25,15,0,5],
        columns: [
          {
            text: [
              {text: 'Pratica atividade fisica? ', fontSize: 14, bold: true},
              pacient.Anamnese.physical, 
            ]
          },
          {
            text: [
              {text: 'Qual? ', fontSize: 14, bold: true},
              pacient.Anamnese.physicalName,    
            ]
          }
        ],
      },
      {
        alignment: 'left',
        margin: [25,15,0,5],
        columns: [
          {
            text: [
              {text: 'Alguma outra doença? ', fontSize: 14, bold: true},
              pacient.Anamnese.anotherDisease, 
            ]
          },
        ],
      },
      {
        alignment: 'left',
        margin: [25,15,0,5],
        columns: [
          {
            text: [
              {text: 'Fez alguma cirurgia? ', fontSize: 14, bold: true},
              pacient.Anamnese.surgery, 
            ]
          },
          {
            text: [
              {text: 'Qual? ', fontSize: 14, bold: true},
              pacient.Anamnese.surgeryName,    
            ]
          }
        ],
      },
      {
        alignment: 'left',
        margin: [25,15,0,5],
        columns: [
          {
            text: [
              {text: 'Faz uso de algum médicamento? ', fontSize: 14, bold: true},
              pacient.Anamnese.medicament, 
            ]
          },
          {
            text: [
              {text: 'Qual? ', fontSize: 14, bold: true},
              pacient.Anamnese.medicamentName,    
            ]
          }
        ],
      },
      {
        alignment: 'left',
        margin: [25,15,0,5],
        columns: [
          {
            text: [
              {text: 'Qual sua queixa principal? ', fontSize: 14, bold: true},
              pacient.Anamnese.reclamation, 
            ]
          },
        ],
      },
      {
        alignment: 'left',
        margin: [25,15,0,5],
        columns: [
          {
            text: [
              {text: 'Qual sua frase mais usada? ', fontSize: 14, bold: true},
              pacient.Anamnese.phrase, 
            ]
          },
        ],
      },
      {
        alignment: 'left',
        margin: [25,15,0,5],
        columns: [
          {
            text: [
              {text: 'Como conheceu o projeto? ', fontSize: 14, bold: true},
              pacient.Anamnese.project, 
            ]
          },
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

export default anamnesePDF