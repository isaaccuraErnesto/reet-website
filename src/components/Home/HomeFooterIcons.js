import HomeFooterIcon from './HomeFooterIcon'

const HomeFooterIcons = () => {
  return (
    <div
      id='home-footer-icons'
      className='d-flex justify-content-around align-items-center'
    >
      <HomeFooterIcon
        id='roof-plumbing-icon'
        BootstrapClassName='fas fa-wrench fa-stack-1x fa-xs'
        caption='Roofing'
      />
      <HomeFooterIcon
        id='carpentry-icon'
        BootstrapClassName='fas fa-hammer fa-stack-1x fa-xs'
        caption='Carpentry'
      />
      <HomeFooterIcon
        id='renovations-icon'
        BootstrapClassName='fas fa-paint-roller fa-stack-1x fa-xs'
        caption='Renovations'
      />
      <HomeFooterIcon
        id='handyman-icon'
        BootstrapClassName='fas fa-toolbox fa-stack-1x fa-xs'
        caption='Handyman'
      />
      <HomeFooterIcon
        id='general-upkeep-icon'
        BootstrapClassName='fas fa-screwdriver fa-stack-1x fa-xs'
        caption='Maintenance'
      />
    </div>
  )
}

export default HomeFooterIcons
