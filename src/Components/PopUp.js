import React, { useRef } from 'react'
import './popup.css'
export default function PopUp() {
    const useRefs = useRef([])
    const handleInput = (event, idx) => {
        const input = event.target;
        if (input.value.length >= 1 && idx < 5) {
            useRefs.current[idx + 1].focus();
        }
        if (idx === 5) {
            event.preventDefault();
        }
    }
    const handleKeyDown = (event, index) => {
        if (event.keyCode === 8 && !event.target.value && index > 0) {
            event.preventDefault();
            useRefs.current[index - 1].focus();
            useRefs.current[index - 1].value = '';
        }
        if (event.keyCode === 8 && !event.target.value && index === 5) {
            event.preventDefault();
          }
    }

    const handlpaste = (event) => {
        event.preventDefault();
        const paste = event.clipboardData.getData('text/plain');
        const digits = paste.match(/\d/g);
        if (digits && digits.length === 6) {
            digits.forEach((digit, idx) => {
                useRefs.current[idx].value = digit;
                if (idx < 5) {
                    useRefs.current[idx + 1].focus();
                }
            });
        }
    };


    return (
        <div className='parent'>
            <div className='containor'>
                <h1 className='phone'>Phone Verification</h1><hr />
                <h4 className='number'>Enter the OTP you received on 63875-5XXXX</h4>
                <div className='otpbox'>
                    <input type='number' className='child' maxLength={1}
                        onKeyUp={(event) => handleInput(event, 0)}
                        onKeyDown={(event) => handleKeyDown(event, 0)}
                        ref={(el) => (useRefs.current[0] = el)}
                        onPaste={handlpaste} />
                    <input type='number' className='child' maxLength={1}
                        onKeyUp={(event) => handleInput(event, 1)}
                        onKeyDown={(event) => handleKeyDown(event, 1)}
                        ref={(el) => (useRefs.current[1] = el)} />
                    <input type='number' className='child' maxLength={1}
                        onKeyUp={(event) => handleInput(event, 2)}
                        onKeyDown={(event) => handleKeyDown(event, 2)}
                        ref={(el) => (useRefs.current[2] = el)} />
                    <input type='number' className='child' maxLength={1}
                        onKeyUp={(event) => handleInput(event, 3)}
                        onKeyDown={(event) => handleKeyDown(event, 3)}
                        ref={(el) => (useRefs.current[3] = el)} />
                    <input type='number' className='child' maxLength={1}
                        onKeyUp={(event) => handleInput(event, 4)}
                        onKeyDown={(event) => handleKeyDown(event, 4)}
                        ref={(el) => (useRefs.current[4] = el)} />
                    <input type='number' className='child' maxLength={1}
                        onKeyUp={(event) => handleInput(event, 5)}
                        onKeyDown={(event) => handleKeyDown(event, 5)}
                        ref={(el) => (useRefs.current[5] = el)} />
                </div>


                <div className='btn'>
                    <button className='btn1'>Change number</button>
                    <button className='btn2'>Re-send OTP</button>
                </div>
                <div className='btnhead'>
                    <button className='verify'>Verify Phone Number</button>
                </div>
            </div>
        </div>
    )
}
