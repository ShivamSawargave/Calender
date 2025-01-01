import React from 'react'

function January() {
  return (
    <>
      <div className="overflow-x-auto">
        <div className='h-24 md:text-6xl font-bold border-2 border-black flex items-center md:pl-12 bg-yellow-200'>January 2025</div>
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
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black hover:bg-blue-900'>
                <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_2').showModal()}>1</button>
                <dialog id="my_modal_2" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">1 January 2025</h3>
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
                <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_3').showModal()}>2</button>
                <dialog id="my_modal_3" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">2 January 2025</h3>
                    <p className="py-4">Rajab:Muslim Month Begin,</p>
                    <p>Rajab M 1</p>
                  
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                </div>
                <div  className='text-xl md:pl-2 text-white'>
                  <p>Rajab:Muslim Month Begin,</p>
                  <p>Rajab M 1</p>
                  
                </div>
                </div>
              </th>
              <th className='md:h-32 md:w-32 md:text-4xl border-2 hover:bg-blue-900 border-black'>
              <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_4').showModal()}>3</button>
                <dialog id="my_modal_4" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">3 January 2025</h3>
                    <p className="py-4">Vinayak Chaturthi,</p>
                    <p>Savitribai Phule Anniversary</p>
                  
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                </div>
                <div  className='text-xl md:pl-2 text-white'>
                  <p>Vinayak Chaturthi,</p>
                  <p>Savitribai Phule Anniversary</p>
                  
                </div>
                </div>
              </th>
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black hover:bg-blue-900'>
              <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_5').showModal()}>4</button>
                <dialog id="my_modal_5" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">4 January 2025</h3>
                    <p className="py-4"></p>
                    <p></p>
                  <p></p>
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                </div>
                <div  className='text-xl md:pl-2 text-white'>
                  <p></p>
                  <p></p>
                  <p></p>
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
                <button className="btn md:text-4xl bg-red-600 text-white" onClick={() => document.getElementById('my_modal_6').showModal()}>5</button>
                <dialog id="my_modal_6" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">5 January 2025</h3>
                    <p className="py-4"></p>
                    <p></p>
                  <p></p>
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                </div>
                <div  className='text-xl md:pl-2 text-red-400 hover:text-white'>
                  <p></p>
                  <p></p>
                  <p></p>
                </div>
                </div>
              </th>
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black  hover:bg-blue-900'>
              <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_7').showModal()}>6</button>
                <dialog id="my_modal_7" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">6 January 2025</h3>
                    <p className="py-4">Guru Govind Singh Birth aniversary</p>
                  
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                </div>
                <div  className='text-xl md:pl-2 text-white'>
                  <p>Guru Govind Singh Birth aniversary</p>
                 
                </div>
                </div>
              </th>
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black  hover:bg-blue-900'>
              <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_8').showModal()}>7</button>
                <dialog id="my_modal_8" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">7 January 2025</h3>
                    <p className="py-4">Durgashtami</p>
                   
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                </div>
                <div  className='text-xl md:pl-2 text-white'>
                  <p>Durgashtami</p>
                  
                </div>
                </div>
              </th>
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black  hover:bg-blue-900'>
              <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_9').showModal()}>8</button>
                <dialog id="my_modal_9" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">8 January 2025</h3>
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
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black  hover:bg-blue-900'>
              <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_10').showModal()}>9</button>
                <dialog id="my_modal_10" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">9 January 2025</h3>
                    <p className="py-4">Shamb Dashmi (Odisha),</p>
                    <p>Surya Pujan (Odisha)</p>
                  
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                </div>
                <div  className='text-xl md:pl-2 text-white'>
                  <p>Shamb Dashmi (Odisha),</p>
                  <p>Surya Pujan (Odisha)</p>
                  
                </div>
                </div>
              </th>
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black  hover:bg-blue-900'>
              <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_11').showModal()}>10</button>
                <dialog id="my_modal_11" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">10 January 2025</h3>
                    <p className="py-4">Putrada Ekadashi,</p>
                    <p>Vaikunth Ekadashi(T.N.)</p>
                  
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                </div>
                <div  className='text-xl md:pl-2 text-white'>
                  <p>Putrada Ekadashi,</p>
                  <p>Vaikunth Ekadashi(T.N.)</p>
                  
                </div>
                </div>
              </th>
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black  hover:bg-blue-900'>
              <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_12').showModal()}>11</button>
                <dialog id="my_modal_12" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">11 January 2025</h3>
                    <p className="py-4">Shani Pradosh</p>
                    
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                </div>
                <div  className='text-xl md:pl-2 text-white'>
                  <p>Shani Pradosh</p>
                  
                </div>
                </div>
              </th>
            </tr>
            {/* row 3 */}
            <tr>
              <th className='md:h-32 md:w-32 bg-red-400 md:text-4xl border-2 border-black  hover:bg-red-800'>
              <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn md:text-4xl bg-red-600 text-white" onClick={() => document.getElementById('my_modal_13').showModal()}>12</button>
                <dialog id="my_modal_13" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">12 January 2025</h3>
                    <p className="py-4">Swami Vivekanand birth aniversary</p>
                    
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                </div>
                <div  className='text-xl md:pl-2 text-red-400 hover:text-white'>
                  <p>Swami Vivekanand birth aniversary</p>
                  
                </div>
                </div>
              </th>
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black  hover:bg-blue-900'>
              <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_14').showModal()}>13</button>
                <dialog id="my_modal_14" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">13 January 2025</h3>
                    <p className="py-4">Shakamb hari purnima,</p>
                    <p>shakambari</p>
                  
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                </div>
                <div  className='text-xl md:pl-2 text-white'>
                  <p>Shakamb hari purnima,</p>
                  <p>shakambari</p>
                  
                </div>
                </div>
              </th>
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black  hover:bg-blue-900'>
              <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_15').showModal()}>14</button>
                <dialog id="my_modal_15" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">14 January 2025</h3>
                    <p className="py-4">Makar Sankrati,</p>
                    <p>Hazarat Ali birth aniversary</p>
                
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                </div>
                <div  className='text-xl md:pl-2 text-white'>
                  <p>Makar Sankrati,</p>
                  <p>Hazarat Ali birth aniversary</p>
                  
                </div>
                </div>
              </th>
              <th className='md:h-32  md:w-32 md:text-4xl border-2 border-black  hover:bg-blue-900'>
              <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_16').showModal()}>15</button>
                <dialog id="my_modal_16" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">15 January 2025</h3>
                    <p className="py-4">Sankrat Karidin</p>
                    
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                </div>
                <div  className='text-xl md:pl-2 text-white'>
                  <p>Sankrat Karidin</p>
                  
                </div>
                </div>
              </th>
              <th className='md:h-32  md:w-32 md:text-4xl border-2 border-black  hover:bg-blue-900'>
                <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_17').showModal()}>16</button>
                <dialog id="my_modal_17" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">16 January 2025</h3>
                    <p className="py-4"></p>
                    
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                </div>
                <div  className='text-xl md:pl-2 text-white'>
                 
                </div>
                </div></th>
              <th className='md:h-32  md:w-32 md:text-4xl border-2 border-black  hover:bg-blue-900'>
              <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_18').showModal()}>17</button>
                <dialog id="my_modal_18" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">17 January 2025</h3>
                    <p className="py-4">Ganesh Sankashta Chaturthi</p>
                    
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                </div>
                <div  className='text-xl md:pl-2 text-white'>
                  <p>Ganesh Sankashta Chaturthi</p>
                  
                </div>
                </div>
              </th>
              <th className='md:h-32  md:w-32 md:text-4xl border-2 border-black  hover:bg-blue-900'>
              <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_19').showModal()}>18</button>
                <dialog id="my_modal_19" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">18 January 2025</h3>
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

            </tr>
            {/* row 4 */}
            <tr>
              <th className='md:h-32  md:w-32 bg-red-400 md:text-4xl border-2 border-black  hover:bg-red-800'>
              <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn md:text-4xl bg-red-600 text-white" onClick={() => document.getElementById('my_modal_20').showModal()}>19</button>
                <dialog id="my_modal_20" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">19 January 2025</h3>
                    <p className="py-4">Rivan Fest (Goa)</p>
                    
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                </div>
                <div  className='text-xl md:pl-2text-red-400 text-red-400 hover:text-white'>
                  <p>Rivan Fest (Goa)</p>
                 
                </div>
                </div>
              </th>
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black  hover:bg-blue-900'>
              <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_21').showModal()}>20</button>
                <dialog id="my_modal_21" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">20 January 2025</h3>
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
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black  hover:bg-blue-900'>
              <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_22').showModal()}>21</button>
                <dialog id="my_modal_22" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">21 January 2025</h3>
                    <p className="py-4">Kalashtami,</p>
                    <p>Swami Vivekanand Birth aniversary</p>
                  
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                </div>
                <div  className='text-xl md:pl-2 text-white'>
                  <p>Kalashtami,</p>
                  <p>Swami Vivekanand Birth aniversary</p>
                  
                </div>
                </div>
              </th>
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black  hover:bg-blue-900'>
              <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_23').showModal()}>22</button>
                <dialog id="my_modal_23" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">22 January 2025</h3>
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
              <th className='md:h-32 md;w-32 md:text-4xl border-2 border-black  hover:bg-blue-900'>
              <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_24').showModal()}>23</button>
                <dialog id="my_modal_24" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">23 January 2025</h3>
                    <p className="py-4">Netaji Subhaschandra Bose birth aniversary</p>
                    
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                </div>
                <div  className='text-xl md:pl-2 text-white'>
                  <p>Netaji Subhaschandra Bose birth aniversary</p>
                  
                </div>
                </div>
              </th>
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black  hover:bg-blue-900'>
              <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_25').showModal()}>24</button>
                <dialog id="my_modal_25" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">24 January 2025</h3>
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
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black  hover:bg-blue-900'>
              <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_26').showModal()}>25</button>
                <dialog id="my_modal_26" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">25 January 2025</h3>
                    <p className="py-4">Shatatila Ekadashi</p>
                   
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                </div>
                <div  className='text-xl md:pl-2 text-white'>
                  <p>Shatatila Ekadashi</p>
                  
                </div>
                </div>
              </th>

            </tr>
            {/* row 5 */}
            <tr>
              <th className='md:h-32 md:w-32 bg-red-400 md:text-4xl border-2 border-black  hover:bg-red-800'>
              <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn md:text-4xl bg-red-600 text-white" onClick={() => document.getElementById('my_modal_27').showModal()}>26</button>
                <dialog id="my_modal_27" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">26 January 2025</h3>
                    <p className="py-4">Indian Republic Day,</p>
                    <p>Pilar Feast (Goa)</p>
                  
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                </div>
                <div  className='text-xl md:pl-2 text-red-400 hover:text-white'>
                  <p>Indian Republic Day,</p>
                  <p>Pilar Feast (Goa)</p>
                  
                </div>
                </div>
              </th>
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black  hover:bg-blue-900'>
              <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_28').showModal()}>27</button>
                <dialog id="my_modal_28" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">27 January 2025</h3>
                    <p className="py-4">Som Pradosh,</p>
                    <p>Shivratri,</p>
                  <p>Meru Trayudarshi</p>
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                </div>
                <div  className='text-xl md:pl-2 text-white'>
                  <p>Som Pradosh,</p>
                  <p>Shivratri,</p>
                  <p>Meru Trayudarshi</p>
                </div>
                </div>
              </th>
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black hover:bg-blue-900'>
              <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_29').showModal()}>28</button>
                <dialog id="my_modal_29" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">28 January 2025</h3>
                    <p className="py-4">Lala Lajpat Rai birth aniversary</p>
                    
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                </div>
                <div  className='text-xl md:pl-2 text-white'>
                  <p>Lala Lajpat Rai birth aniversary</p>
                  
                </div>
                </div>
              </th>
              <th className='md:h-32 md:w-32  md:text-4xl border-2 border-black  hover:bg-blue-900'>
              <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_30').showModal()}>29</button>
                <dialog id="my_modal_30" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">29 January 2025</h3>
                    <p className="py-4">Darsamavasya,</p>
                    <p>Mauni Amavasya(Jain)</p>
                 
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                </div>
                <div  className='text-xl md:pl-2 text-white'>
                  <p>Darsamavasya,</p>
                  <p>Mauni Amavasya(Jain)</p>
                 
                </div>
                </div>
              </th>
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black hover:bg-blue-900'>
              <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_31').showModal()}>30</button>
                <dialog id="my_modal_31" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">30 January 2025</h3>
                    <p className="py-4">Magha begin,</p>
                    <p>Hutatma Din</p>
                  
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                </div>
                <div  className='text-xl md:pl-2 text-white'>
                  <p>Magha begin,</p>
                  <p>Hutatma Din</p>
                  
                </div>
                </div>
              </th>
              <th className='md:h-32 md:w-32 md:text-4xl border-2 border-black hover:bg-blue-900'>
              <div className='flex flex-row items-center'>
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn md:text-4xl" onClick={() => document.getElementById('my_modal_32').showModal()}>31</button>
                <dialog id="my_modal_32" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-5xl text-red-800">31 January 2025</h3>
                    <p className="py-4">Shaban Muslim month</p>
                    
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                </div>
                <div  className='text-xl md:pl-2 text-white'>
                  <p>Shaban Muslim month</p>
                  
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

export default January