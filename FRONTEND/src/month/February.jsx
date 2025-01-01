import React from 'react'

function February() {
  return (
    <>
        <div className="overflow-x-auto">
        <div className='pd-6 md:text-6xl font-bold border-2 border-black flex items-center md:pl-12 bg-yellow-200'>February 2025</div>
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
                <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_33').showModal()}>1</button>
                <dialog id="my_modal_33" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">1 February 2025</h3>
                    <p className="py-4">Shree Ganesh Jayanti</p>
                    
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                </div>
                <div  className='text-xl md:pl-2 text-white'>
                  <p>Shree Ganesh Jayanti</p>
                  
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
                <button className="btn md:text-4xl bg-red-600 text-white" onClick={() => document.getElementById('my_modal_34').showModal()}>2</button>
                <dialog id="my_modal_34" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">2 February 2025</h3>
                    <p className="py-4">Vasant Panchami,</p>
                    <p>Margao Grace</p>
                  
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                </div>
                <div  className='text-xl md:pl-2 text-red-400 hover:text-white'>
                  <p>Vasant Panchami,</p>
                  <p>Margao Grace</p>
                 
                </div>
                </div>
              </th>
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black hover:bg-blue-900'>
              <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_35').showModal()}>3</button>
                <dialog id="my_modal_35" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">3 February 2025</h3>
                    <p className="py-4">Sital Shashti (Bengal)</p>
                   
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                </div>
                <div  className='text-xl md:pl-2 text-white'>
                  <p>Sital Shashti (Bengal)</p>
                  
                </div>
                </div>
              </th>
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black hover:bg-blue-900'>
              <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_36').showModal()}>4</button>
                <dialog id="my_modal_36" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">4 February 2025</h3>
                    <p className="py-4">Ratha Saptami</p>
                   
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                </div>
                <div  className='text-xl md:pl-2 text-white'>
                  <p>Ratha Saptami</p>
                 
                </div>
                </div>
              </th>
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black hover:bg-blue-900'>
              <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_37').showModal()}>5</button>
                <dialog id="my_modal_37" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">5 February 2025</h3>
                    <p className="py-4">Bhishmashtami,</p>
                    <p>Durgashtami,</p>
                  <p>Budhashtami</p>
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                </div>
                <div  className='text-xl md:pl-2 text-white'>
                  <p>Bhishmashtami,</p>
                  <p>Durgashtami,</p>
                  <p>Budhashtami</p>
                </div>
                </div>
              </th>
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black hover:bg-blue-900'>
              <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_38').showModal()}>6</button>
                <dialog id="my_modal_38" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">6 February 2025</h3>
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
                <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_39').showModal()}>7</button>
                <dialog id="my_modal_39" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">7 February 2025</h3>
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
                <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_40').showModal()}>8</button>
                <dialog id="my_modal_40" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">8 February 2025</h3>
                    <p className="py-4">Jaya Ekadashi</p>
                    
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                </div>
                <div  className='text-xl md:pl-2 text-white'>
                  <p>Jaya Ekadashi</p>
                  
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
                <button className="btn md:text-4xl bg-red-600 text-white" onClick={() => document.getElementById('my_modal_41').showModal()}>9</button>
                <dialog id="my_modal_41" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">9 February 2025</h3>
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
                <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_42').showModal()}>10</button>
                <dialog id="my_modal_42" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">10 February 2025</h3>
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
                <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_43').showModal()}>11</button>
                <dialog id="my_modal_43" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">1 January 2025</h3>
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
                <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_44').showModal()}>12</button>
                <dialog id="my_modal_44" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">12 February 2025</h3>
                    <p className="py-4">Purmima</p>
                   
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
                <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_45').showModal()}>13</button>
                <dialog id="my_modal_45" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">13 February 2025</h3>
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
                <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_46').showModal()}>14</button>
                <dialog id="my_modal_46" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">14 February 2025</h3>
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
                <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_47').showModal()}>15</button>
                <dialog id="my_modal_47" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">15 February 2025</h3>
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
                <button className="btn md:text-4xl bg-red-600 text-white" onClick={() => document.getElementById('my_modal_48').showModal()}>16</button>
                <dialog id="my_modal_48" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">16 February 2025</h3>
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
                <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_49').showModal()}>17</button>
                <dialog id="my_modal_49" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">17 February 2025</h3>
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
                <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_50').showModal()}>18</button>
                <dialog id="my_modal_50" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">18 February 2025</h3>
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
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black hover:bg-red-800'>
              <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn md:text-4xl bg-red-600 text-white" onClick={() => document.getElementById('my_modal_51').showModal()}>19</button>
                <dialog id="my_modal_51" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">19 February 2025</h3>
                    <p className="py-4">Chhatrapatti Shivaji Maharaj Birth aniversary</p>
                   
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                </div>
                <div  className='text-xl md:pl-2 text-white'>
                  <p>Chhatrapatti Shivaji Maharaj Birth aniversary</p>
                  
                </div>
                </div>
              </th>
              <th className='md:h-32 md;w-32 md:text-4xl border-2 border-black hover:bg-blue-900'>
              <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_52').showModal()}>20</button>
                <dialog id="my_modal_52" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">20 February 2025</h3>
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
                <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_53').showModal()}>21</button>
                <dialog id="my_modal_53" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">21 February 2025</h3>
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
                <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_54').showModal()}>22</button>
                <dialog id="my_modal_54" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">22 February 2025</h3>
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
                <button className="btn md:text-4xl bg-red-600 text-white" onClick={() => document.getElementById('my_modal_55').showModal()}>23</button>
                <dialog id="my_modal_55" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">23 February 2025</h3>
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
                <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_56').showModal()}>24</button>
                <dialog id="my_modal_56" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">24 February 2025</h3>
                    <p className="py-4"></p>
                    
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                </div>
                <div  className='text-xl md:pl-2 text-white'>
                  <p></p>
                 
                </div>
                </div>
              </th>
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black hover:bg-blue-900'>
              <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_57').showModal()}>25</button>
                <dialog id="my_modal_57" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">25 February 2025</h3>
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
              <th className='md:h-32 md:w-32  md:text-4xl border-2 border-black hover:bg-red-800'>
              <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn md:text-4xl bg-red-600 text-white" onClick={() => document.getElementById('my_modal_58').showModal()}>26</button>
                <dialog id="my_modal_58" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">26 February 2025</h3>
                    <p className="py-4">Mahashivratri</p>
                  
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                </div>
                <div  className='text-xl md:pl-2 text-white'>
                  <p>Mahashivratri</p>
                 
                </div>
                </div>
              </th>
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black hover:bg-blue-900'>
              <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_59').showModal()}>27</button>
                <dialog id="my_modal_59" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">27 February 2025</h3>
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
                <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_60').showModal()}>28</button>
                <dialog id="my_modal_60" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">28 February 2025</h3>
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
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black'></th>

            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default February