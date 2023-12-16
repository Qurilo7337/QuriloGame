import React from 'react'

function FooterContent() {
    const footerContent = [
        {
          title: 'Games',
          content: [
            'Games',
            'Slots',
            'Live Casino',
            'Slots',
            'Live Casino'
          ]
        },
        {
          title: 'About',
          content: [
            'Aboutus',
            'Promotions',
            'VIP',
            'Help Center',
            'Affiliate Program',
            'Awards & Certificates',
            'App'
          ]
        },
        {
          title: 'Legal Information',
          content: [
            'Legal Information',
            'General Terms & Conditions',
            'Responsible Gaming Policy',
            'Sports Betting Rules',
            'Privacy and Cookies Policy',
            'Payment Methods',
            'Casino Bonus Terms & Conditions',
            'Limits'
          ]
        }
      ];
      
  return (
    <div className='pt-5' style={{background: '#12294a'}}>
         <div className="px-md-5 px-3">
        <div className="row">
          <div className="col-md-3 col-12 pb-3 pb-md-0 text-left">       
            <div className='SSA_Font_24px'>Help Center</div>
            <div className='SSA_colorGrey SSA_Font_15px'>If you have any questions?</div>
            <button className="my-2 px-4 bg-primary" style={{borderRadius:'8px'}}  >
              <div className="text-center text-white SSA_Font_15px pt-3">
              1 BTC = 41 616.54 USD
              </div> 
</button>
            <button className="my-2 px-4 SSA_footer_transclusentBtn" >
              <div className="text-center SSA_colorGrey SSA_Font_15px pt-3">
              1 BTC = 41 616.54 USD
              </div>
</button>
          </div>
          {footerContent.map((column, index) => (
            <div key={index} className="col col-md-2 col-sm-6 col-6 text-left">
              <div className='SSA_Font_15px'>{column.title}</div>
              {/* Map through content array to display each item on a separate line */}
              {column.content.map((item, i) => (
                <div key={i} className='SSA_colorGrey SSA_Font_15px'>{item}</div>
              ))}
              <br />
            </div>
          ))}
          <div className="col-md-2 col-sm-6 col-6 px-5">
            <div className='row'>
<div className="d-flex SSA_footer_transclusentBtn py-2" >
  <img src="https://bluechip.io/_next/static/media/apple.3731eb3c.svg" alt="" />
  <div className='text-left'>
    <h4>SatSport</h4>
    <p className='SSA_colorGrey SSA_Font_15px mb-1'> for Mac OS</p>
  </div> 
</div>

<div className="d-flex my-1  py-2" >
  <div className='SSA_footer_transclusentBtn mr-1 px-1'>
  <img src="https://bluechip.io/_next/static/media/android.540b5f7e.svg" alt="" />
  <div className='SSA_colorGrey SSA_Font_15px mb-1'>ANDROID</div>
  </div>
  <div className='SSA_footer_transclusentBtn ml-1 px-1'>
  <img src="https://bluechip.io/_next/static/media/apple.3731eb3c.svg" alt="" />
  <div className='SSA_colorGrey SSA_Font_15px mb-1'>IOS</div>
  </div>
</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterContent