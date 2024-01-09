import dayjs from "dayjs";
import * as pdfMake from "pdfmake/build/pdfmake";

function servicePDF(orders) {
 
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
      text: 'Ordem de Serviço',
      alignment: 'center',
      fontSize: '18',
      bold: true,
      margin: [20,20,0,45]
    }
  ];

  const dados = orders.map((order) => {
    return [
      {
        alignment: 'left',
        margin: [50,20,0,30],
        columns: [
          {
            text: [
              {text: 'Nome: ', fontSize: 14, bold: true},
              order.patient.name, 
            ]
          },
          {
            text: [
              {text: 'Data de Nascimento: ', fontSize: 14, bold: true},
              dayjs(order.createdAt).format('DD/MM/YYYY'),    
            ]
          }
        ],
      },
      {
        alignment: 'left',
        margin: [50,5,0,5],
        columns: [
          {
            text: [
              {text: 'Terapias', fontSize: 18, bold: true},
            ]
          },
        ],
      },
      order.therapie.map((therapie) => [
        {
          alignment: 'left',
          margin: [50,5,0,5],
          columns: [
            {
              text: [
                {text: therapie.name, fontSize: 14, bold: true},
              ]
            },
            {
              text: [
                {text: "Profissional: ", fontSize: 14, bold: true},
                therapie.therapist,
              ]
            },
          ],
        },
      ]),
      {
        alignment: 'left',
        margin: [50,40,0,5],
        columns: [
          {
            text: [
              {text: 'Forma de pagamento: ', fontSize: 14, bold: true},
              order.paymant, 
            ]
          },
        ],
      },
      {
        alignment: 'left',
        margin: [50,20,0,5],
        columns: [
          {
            text: [
              {text: 'Quantidade de Terapias: ', fontSize: 14, bold: true},
              order.therapie.length, 
            ]
          },
        ],
      },
      {
        alignment: 'left',
        margin: [50,20,0,5],
        columns: [
          {
            text: [
              {text: 'Confirmado o pagamento por: ', fontSize: 14, bold: true},
              order.paymantConfirme, 
            ]
          },
        ],
      },
      {
        alignment: 'left',
        margin: [50,40,0,5],
        columns: [
          {
            text: [
              {text: 'Observação: ', fontSize: 14, bold: true},
              order.observation, 
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

export default servicePDF