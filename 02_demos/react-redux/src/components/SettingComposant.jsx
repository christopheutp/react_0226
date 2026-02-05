import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementBy, incrementBy, setStep } from '../store';

export default function SettingComposant() {

    const step = useSelector(s => s.settings.step);
    const counter = useSelector(s => s.counter.value)
    const dispatch = useDispatch();

  return (
    <div>
        <h1>Compteur {counter}</h1>
        <div>
            Valeur d'incrementation :
            <input type='number' value={step} onChange={(e) => dispatch(setStep(e.target.value))}></input>
        </div>

        <button onClick={() => dispatch(incrementBy(step))}>incrementation par step</button>
        <button onClick={() => dispatch(decrementBy(step))}>decrementation par step</button>
    </div>
  )
}
