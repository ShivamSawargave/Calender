import React from 'react'

function March() {
  return (
    <>
        <div className="overflow-x-auto">
        <div className='h-24 md:text-6xl font-bold border-2 border-black flex items-center md:pl-12 bg-yellow-200'>March 2025</div>
        <table className="table">
          {/* head */}
          <thead>
            <tr>

              <th className='md:h-32 md:w-32 md:text-4xl text-white bg-red-400 border-2 border-black'>Sunday</th>
              <th className='md:h-32 md:w-32 md:text-4xl bg-base-300 border-2 border-black'>Monday</th>
              <th className='md:h-32 md:w-32 md:text-4xl bg-base-300 border-2 border-black'>Tuesday</th>
              <th className='md:h-32 md:w-32 md:text-4xl bg-base-300 border-2 border-black'>Wenusday</th>
              <th className='md:h-32 md:w-32 md:text-4xl bg-base-300 border-2 border-black'>Thursday</th>
              <th className='md:h-32 md:w-32 md:text-4xl bg-base-300 border-2 border-black'>Friday</th>
              <th className='md:h-32 md:w-32 md:text-4xl bg-base-300 border-2 border-black'>Saterday</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th className='md:h-32 md:w-32 md:text-4xl bg-red-400 border-2 border-black'></th>
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black'></th>
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black'></th>
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black'></th>
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black'></th>
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black'></th>
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black hover:bg-blue-900'>
              <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_61').showModal()}>1</button>
                <dialog id="my_modal_61" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">1 March 2025</h3>
                    <p className="py-4"></p>
                    
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                </div>
                <div  className='text-xl md:pl-2 text-white'>
                  
                </div>
                </div>
              </th>
            </tr>
            {/* row 2 */}
            <tr>
              <th className='md:h-32 md:w-32 bg-red-400 md:text-4xl border-2 border-black hover:bg-red-800'>
              <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn md:text-4xl bg-red-600 text-white" onClick={() => document.getElementById('my_modal_62').showModal()}>2</button>
                <dialog id="my_modal_62" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">2 March 2025</h3>
                    <p className="py-4">Ramjan Muslim month begin</p>
                    
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                </div>
                <div  className='text-xl md:pl-2  text-red-400 hover:text-white'>
                  <p>Ramjan Muslim month begin</p>
                  
                </div>
                </div>
              </th>
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black hover:bg-blue-900'>
              <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_63').showModal()}>3</button>
                <dialog id="my_modal_63" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">3 March 2025</h3>
                    <p className="py-4"></p>
                    
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                </div>
                <div  className='text-xl md:pl-2 text-white'>
                 
                </div>
                </div>
              </th>
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black hover:bg-blue-900'>
              <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_64').showModal()}>4</button>
                <dialog id="my_modal_64" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">4 March 2025</h3>
                    <p className="py-4">National Safety Day</p>
                    
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                </div>
                <div  className='text-xl md:pl-2 text-white'>
                  <p>National Safety Day</p>
                 
                </div>
                </div>
              </th>
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black hover:bg-blue-900'>
              <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_65').showModal()}>5</button>
                <dialog id="my_modal_65" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">5 March 2025</h3>
                    <p className="py-4"></p>
                   
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                </div>
                <div  className='text-xl md:pl-2 text-white'>
                 
                </div>
                </div>
              </th>
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black hover:bg-blue-900'>
              <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_66').showModal()}>6</button>
                <dialog id="my_modal_66" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">6 March 2025</h3>
                    <p className="py-4"></p>
                    
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                </div>
                <div  className='text-xl md:pl-2 text-white'>
                  
                </div>
                </div>
              </th>
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black hover:bg-blue-900'>
              <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_67').showModal()}>7</button>
                <dialog id="my_modal_67" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">7 March 2025</h3>
                    <p className="py-4"></p>
                   
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                </div>
                <div  className='text-xl md:pl-2 text-white'>
                 
                </div>
                </div>
              </th>
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black hover:bg-blue-900'>
              <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_68').showModal()}>8</button>
                <dialog id="my_modal_68" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">8 March 2025</h3>
                    <p className="py-4">International Women Day</p>
                   
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                </div>
                <div  className='text-xl md:pl-2 text-white'>
                  <p>International Women Day</p>
                  
                </div>
                </div>
              </th>
            </tr>
            {/* row 3 */}
            <tr>
              <th className='md:h-32 md:w-32 bg-red-400 md:text-4xl border-2 border-black hover:bg-red-800'>
              <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn md:text-4xl bg-red-600 text-white" onClick={() => document.getElementById('my_modal_69').showModal()}>9</button>
                <dialog id="my_modal_69" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">9 March 2025</h3>
                    <p className="py-4"></p>
                    
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                </div>
                <div  className='text-xl md:pl-2 text-white'>
                  
                </div>
                </div>
              </th>
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black hover:bg-blue-900'>
              <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_70').showModal()}>10</button>
                <dialog id="my_modal_70" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">10 March 2025</h3>
                    <p className="py-4"></p>
                   
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                </div>
                <div  className='text-xl md:pl-2 text-white'>
                 
                </div>
                </div>
              </th>
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black hover:bg-blue-900'>
              <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_71').showModal()}>11</button>
                <dialog id="my_modal_71" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">11 March 2025</h3>
                    <p className="py-4"></p>
                   
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                </div>
                <div  className='text-xl md:pl-2 text-white'>
                  
                </div>
                </div>
              </th>
              <th className='md:h-32  md:w-32 md:text-4xl border-2 border-black hover:bg-blue-900'>
              <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_72').showModal()}>12</button>
                <dialog id="my_modal_72" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">12 March 2025</h3>
                    <p className="py-4"></p>
                    
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                </div>
                <div  className='text-xl md:pl-2 text-white'>
                
                </div>
                </div>
              </th>
              <th className='md:h-32  md:w-32 md:text-4xl border-2 border-black hover:bg-blue-900'>
              <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_73').showModal()}>13</button>
                <dialog id="my_modal_73" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">13 March 2025</h3>
                    <p className="py-4"></p>
                    
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                </div>
                <div  className='text-xl md:pl-2 text-white'>
                 
                </div>
                </div>
              </th>
              <th className='md:h-32  md:w-32 md:text-4xl border-2 border-black hover:bg-red-800'>
              <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn md:text-4xl bg-red-600 text-white" onClick={() => document.getElementById('my_modal_74').showModal()}>14</button>
                <dialog id="my_modal_74" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">14 March 2025</h3>
                    <p className="py-4">Holi</p>
                    
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                </div>
                <div  className='text-xl md:pl-2 text-white'>
                  <p>Holi</p>
                  
                </div>
                </div>
              </th>
              <th className='md:h-32  md:w-32 md:text-4xl border-2 border-black hover:bg-blue-900'>
              <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_75').showModal()}>15</button>
                <dialog id="my_modal_75" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">15 March 2025</h3>
                    <p className="py-4"></p>
                  
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                </div>
                <div  className='text-xl md:pl-2 text-white'>
                 
                </div>
                </div>
              </th>

            </tr>
            {/* row 4 */}
            <tr>
              <th className='md:h-32  md:w-32 bg-red-400 md:text-4xl border-2 border-black hover:bg-red-800'>
              <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn md:text-4xl bg-red-600 text-white" onClick={() => document.getElementById('my_modal_76').showModal()}>16</button>
                <dialog id="my_modal_76" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">16 March 2025</h3>
                    <p className="py-4"></p>
                    
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                </div>
                <div  className='text-xl md:pl-2 text-white'>
                 
                </div>
                </div>
              </th>
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black hover:bg-blue-900'>
              <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_77').showModal()}>17</button>
                <dialog id="my_modal_77" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">17 March 2025</h3>
                    <p className="py-4"></p>
                    
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                </div>
                <div  className='text-xl md:pl-2 text-white'>
                 
                </div>
                </div>
              </th>
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black hover:bg-blue-900'>
              <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_78').showModal()}>18</button>
                <dialog id="my_modal_78" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">18 March 2025</h3>
                    <p className="py-4"></p>
                    
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                </div>
                <div  className='text-xl md:pl-2 text-white'>
                  
                </div>
                </div>
              </th>
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black hover:bg-blue-900'>
              <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_79').showModal()}>19</button>
                <dialog id="my_modal_79" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">19 March 2025</h3>
                    <p className="py-4"></p>
                    
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                </div>
                <div  className='text-xl md:pl-2 text-white'>
                 
                </div>
                </div>
              </th>
              <th className='md:h-32 md;w-32 md:text-4xl border-2 border-black hover:bg-blue-900'>
              <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_80').showModal()}>20</button>
                <dialog id="my_modal_80" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">20 March 2025</h3>
                    <p className="py-4"></p>
                    
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                </div>
                <div  className='text-xl md:pl-2 text-white'>
                 
                </div>
                </div>
              </th>
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black hover:bg-blue-900'>
              <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_81').showModal()}>21</button>
                <dialog id="my_modal_81" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">21 March 2025</h3>
                    <p className="py-4"></p>
                   
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                </div>
                <div  className='text-xl md:pl-2 text-white'>
                 
                </div>
                </div>
              </th>
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black hover:bg-blue-900'>
              <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_82').showModal()}>22</button>
                <dialog id="my_modal_82" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">22 March 2025</h3>
                    <p className="py-4"></p>
                   
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                </div>
                <div  className='text-xl md:pl-2 text-white'>
                 
                </div>
                </div>
              </th>

            </tr>
            {/* row 5 */}
            <tr>
              <th className='md:h-32 md:w-32 bg-red-400 md:text-4xl border-2 border-black hover:bg-red-800'>
              <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn md:text-4xl bg-red-600 text-white" onClick={() => document.getElementById('my_modal_83').showModal()}>23</button>
                <dialog id="my_modal_83" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">23 March 2025</h3>
                    <p className="py-4">World Meteological Organisation</p>
                    
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                </div>
                <div  className='text-xl md:pl-2 text-white'>
                 
                </div>
                </div>
              </th>
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black hover:bg-blue-900'>
              <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_84').showModal()}>24</button>
                <dialog id="my_modal_84" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">24 March 2025</h3>
                    <p className="py-4"></p>
                    
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                </div>
                <div  className='text-xl md:pl-2 text-white'>
                  
                </div>
                </div>
              </th>
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black hover:bg-blue-900'>
              <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_85').showModal()}>25</button>
                <dialog id="my_modal_85" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">25 March 2025</h3>
                    <p className="py-4"></p>
                    
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                </div>
                <div  className='text-xl md:pl-2 text-white'>
                 
                </div>
                </div>
              </th>
              <th className='md:h-32 md:w-32  md:text-4xl border-2 border-black hover:bg-blue-900'>
              <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_86').showModal()}>26</button>
                <dialog id="my_modal_86" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">26 March 2025</h3>
                    <p className="py-4">Happy New Year Day,</p>
                    <p>Kharistabda 2025 begin,</p>
                  <p>Jamadilak</p>
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                </div>
                <div  className='text-xl md:pl-2 text-white'>
                  <p>Happy New Year Day,</p>
                  <p>Kharistabda 2025 begin,</p>
                  <p>Jamadilak</p>
                </div>
                </div>
              </th>
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black hover:bg-blue-900'>
              <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_87').showModal()}>27</button>
                <dialog id="my_modal_87" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">27 March 2025</h3>
                    <p className="py-4"></p>
                   
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                </div>
                <div  className='text-xl md:pl-2 text-white'>
                
                </div>
                </div>
              </th>
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black hover:bg-blue-900'>
              <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_88').showModal()}>28</button>
                <dialog id="my_modal_88" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">28 March 2025</h3>
                    <p className="py-4"></p>
                    
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                </div>
                <div  className='text-xl md:pl-2 text-white'>

                  </div>
                </div>
              </th>
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black hover:bg-blue-900'>
              <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_89').showModal()}>29</button>
                <dialog id="my_modal_2" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">29 March 2025</h3>
                    <p className="py-4">Darsha Amavasya</p>
                   
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                </div>
                <div  className='text-xl md:pl-2 text-white'>
                  <p>Darsha Amavasya</p>
                 
                </div>
                </div>
              </th>

            </tr>
            {/* row 6 */}
            <tr>
              <th className='md:h-32 md:w-32 md:text-4xl bg-red-400 border-2 border-black hover:bg-red-800'>
              <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn md:text-4xl bg-red-600 text-white" onClick={() => document.getElementById('my_modal_90').showModal()}>30</button>
                <dialog id="my_modal_90" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">30 March 2025</h3>
                    <p className="py-4">Gudhi Padwa</p>
                   
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                </div>
                <div  className='text-xl md:pl-2 text-red-400 hover:text-white'>
                  <p>Gudhi Padwa</p>
                 
                </div>
                </div>
              </th>
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black hover:bg-red-800'>
              <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn md:text-4xl bg-red-600 text-white" onClick={() => document.getElementById('my_modal_91').showModal()}>31</button>
                <dialog id="my_modal_91" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">31 March 2025</h3>
                    <p className="py-4">Ramzan Id</p>
                   
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                </div>
                <div  className='text-xl md:pl-2 text-red-400 hover:text-white'>
                  <p>Ramzan Id</p>
                 
                </div>
                </div>
              </th>
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black'></th>
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black'></th>
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black'></th>
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black'></th>
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black'></th>
            </tr>
            {/* row 2 */}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default March