import React from 'react';

const Resume = () => {
    return (
        <div>
            <button className='btn p-2 my-3 bold btn-shadow text-decoration-none' style={{ backgroundColor: "purple", color: 'white' }} >
                <a className='text-decoration-none text-white'
                    href="https://drive.google.com/file/d/1fG8r653PHLxn58CNeoghoocrV8WRisrl/view?usp=sharing" terget="_blank"
                    download >
                    Download resume <i className='bi bi-download'></i>
                </a>
            </button>
        </div>




    );
};

export default Resume;



{/* <a href=" https://drive.google.com/file/d/1fG8r653PHLxn58CNeoghoocrV8WRisrl/view?usp=sharing" download> Download resune</a> */ }