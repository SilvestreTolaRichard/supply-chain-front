import supplychain from '../../img/supplychain.png'

export const HomeScreen = () => {
  return (
    <div className="p-5">
      <div className="row">
        <div className="col-sm-6 mb-3">
          <div className='row justify-content-center pt-5'>
            <div className='col-sm-8'>
              <h1 className='text-center'>Bienvenido!</h1>
              <p className='fs-5'>
                InfoMeat es un sistema para mantener la
                trazabilidad de la cadena de suministro de
                la industria de la carne, usando la tecnología
                blockchain.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 mb-3">
          <div className='row justify-content-center'>
            <div className='col-sm-10'>
              <img className='w-100' src={supplychain} alt='cadena de suministro' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
