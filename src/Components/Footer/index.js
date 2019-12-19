import React, {Component} from 'react';
import { PolymorphicCopyrightNotice } from '@ta-interaktiv/react-copyright-notice';
import ShareButtons, { displayTypes } from '@ta-interaktiv/react-share-buttons';
import FeedbackMessage from '@ta-interaktiv/react-feedback-message';
import '@ta-interaktiv/semantic-ui/semantic/dist/components/container.css'
import '@ta-interaktiv/semantic-ui/semantic/dist/components/header.css'
import '@ta-interaktiv/semantic-ui/semantic/dist/components/image.css'
import '@ta-interaktiv/semantic-ui/semantic/dist/components/list.css'
import '@ta-interaktiv/semantic-ui/semantic/dist/components/segment.css'
import '@ta-interaktiv/semantic-ui/semantic/dist/components/divider.css'
import '@ta-interaktiv/semantic-ui/semantic/dist/components/table.css'
import '@ta-interaktiv/semantic-ui/semantic/dist/components/grid.css'
import '@ta-interaktiv/semantic-ui/semantic/dist/components/icon.css'
import '@ta-interaktiv/semantic-ui/semantic/dist/components/card.css'
import '@ta-interaktiv/semantic-ui/semantic/dist/components/loader.css'
import './footer.css';


class Footer extends Component {
  render() {
    return (
      <footer className='ui vertical segment'>
        
        <div className='ui two column divided stackable grid'>
          <div className='stretched aligned row' id='impressum'>
            <div className='column'>
              <table className='ui definition very basic small infographic table'>
                <tbody>
                  <tr style={{ paddingTop: '0.3em' }}>
                    <td>Texte: </td>
                    <td>Redaktion Thuner Tagblatt</td>
                  </tr><tr>
                    <td>Konzept:</td>
                    <td>Marco Zysset</td>
                  </tr>
                  <tr>
                    <td>Digitale Umsetzung:</td>
                    <td>Daniel Barben</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='column'>
                    <FeedbackMessage
                      mailTo='online@bernerzeitung.ch'
                      question='Haben Sie Anmerkungen oder einen Fehler entdeckt?'
                    />
                    <div className='ui fluid share aligned container'>
                      <ShareButtons
                        articleId='30388323'
                        displayType={displayTypes.VERTICAL_BUTTONS}
                      />
                    </div>
                    
            </div>
          </div>
        </div>
        <div className='center aligned row'>
          <div className='column last' style={{ margin: 'auto' }}>
              <div className='ui fluid copyright container infographic'>
                  <PolymorphicCopyrightNotice />
              </div>
            </div>
          </div>
            
    </footer> 
    )
  }
}

export default Footer;