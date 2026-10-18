'use client';

import Link from 'next/link';
import { useState, type FormEvent } from 'react';

type Mode = 'login' | 'signup' | 'reset';

function GithubIcon() {
  return <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .8a11.2 11.2 0 0 0-3.54 21.83c.56.1.77-.24.77-.54v-2.1c-3.13.68-3.79-1.33-3.79-1.33-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.68.08-.68 1.13.08 1.72 1.16 1.72 1.16 1 1.72 2.62 1.22 3.26.93.1-.73.39-1.22.71-1.5-2.5-.28-5.13-1.25-5.13-5.57 0-1.23.44-2.24 1.16-3.03-.12-.28-.5-1.43.11-2.98 0 0 .95-.3 3.08 1.15a10.7 10.7 0 0 1 5.6 0c2.14-1.45 3.08-1.15 3.08-1.15.61 1.55.23 2.7.11 2.98.72.8 1.16 1.8 1.16 3.03 0 4.33-2.63 5.28-5.14 5.56.4.35.76 1.03.76 2.08v3.1c0 .3.2.65.77.54A11.2 11.2 0 0 0 12 .8Z"/></svg>;
}

export default function AuthScreen({ mode }: { mode: Mode }) {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState('');
  const signup = mode === 'signup';
  const reset = mode === 'reset';

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (signup && String(data.get('name') ?? '').trim().length < 2) {
      setMessage('Please enter a name with at least two characters.');
      return;
    }
    setMessage(reset
      ? 'Demo only: no recovery email has been sent.'
      : 'Your form is valid. This is a UI demo; no account was created or signed in.');
  }

  return <main className="page">
    <div className="auth-shell">
      <section className="form-panel" aria-labelledby="page-title">
        <header className="form-header">
          <Link href="/login" className="brand" aria-label="Willow home"><span className="brand-mark" aria-hidden="true"/>Willow</Link>
          <span className="project-label">SLOW DOWN. GROW.</span>
        </header>
        <div className="form-content">
          <div className="eyebrow"><span/> A LITTLE ROOM TO GROW</div>
          <h1 id="page-title">{reset ? 'Find your way back.' : signup ? 'Make yourself at home.' : 'Welcome back.'}</h1>
          <p className="subtitle">{reset ? 'Enter your email to preview the recovery flow.' : signup ? 'A calmer workspace starts with a simple hello.' : 'Take a breath. Your workspace is right where you left it.'}</p>
          <form onSubmit={submit}>
            {signup && <div className="field"><label htmlFor="name">Full name</label><input id="name" name="name" autoComplete="name" placeholder="Alex Morgan" minLength={2} maxLength={80} required/></div>}
            <div className="field"><label htmlFor="email">Email address</label><input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" maxLength={254} required/></div>
            {!reset && <div className="field"><label htmlFor="password">Password</label><div className="password-wrap"><input id="password" name="password" type={visible ? 'text' : 'password'} autoComplete={signup ? 'new-password' : 'current-password'} placeholder={signup ? 'At least 8 characters' : 'Enter your password'} minLength={signup ? 8 : 1} maxLength={128} required aria-describedby={signup ? 'password-help' : undefined}/><button type="button" className="reveal" onClick={() => setVisible(!visible)} aria-label={visible ? 'Hide password' : 'Show password'} aria-pressed={visible}>{visible ? 'Hide' : 'Show'}</button></div>{signup && <small id="password-help">Use a long, unique password.</small>}</div>}
            {!reset && <div className="options">{signup ? <label className="check"><input type="checkbox" required/>I understand this is an interface demo.</label> : <><label className="check"><input type="checkbox" name="remember"/>Remember me</label><Link href="/forgot-password">Forgot password?</Link></>}</div>}
            <button className="primary" type="submit">{reset ? 'Preview recovery' : signup ? 'Create account' : 'Sign in'}<span aria-hidden="true">↗</span></button>
            <p className="status" role="status" aria-live="polite">{message}</p>
          </form>
          {!reset && <><div className="divider"><span>or continue with</span></div><div className="socials"><button type="button" onClick={() => setMessage('GitHub sign-in is not connected in this demo.')}><GithubIcon/>Continue with GitHub</button><button type="button" onClick={() => setMessage('Google sign-in is not connected in this demo.')}><span className="google" aria-hidden="true">G</span>Continue with Google</button></div></>}
          <p className="switch">{reset ? 'Remember your password?' : signup ? 'Already have an account?' : 'New to Willow?'} <Link href={signup || reset ? '/login' : '/signup'}>{signup || reset ? 'Sign in' : 'Create an account'}</Link></p>
        </div>
        <footer className="form-footer"><span>© {new Date().getFullYear()} Willow</span><span>UI concept · No live authentication</span></footer>
      </section>
      <aside className="art-panel" aria-label="Illustration of an olive tree in a sunlit reading corner">
        <div className="art-top"><span>WILLOW JOURNAL</span><span>NO. 005</span></div>
        <div className="botanical-scene" aria-hidden="true"><svg viewBox="0 0 600 720" preserveAspectRatio="xMidYMid slice"><defs><linearGradient id="wall" x2="1" y2="1"><stop stopColor="#e8e3d5"/><stop offset="1" stopColor="#f7f1e4"/></linearGradient><linearGradient id="pot" x2="1"><stop stopColor="#b68e71"/><stop offset=".5" stopColor="#d4b498"/><stop offset="1" stopColor="#ad8267"/></linearGradient><linearGradient id="seat" x2="1" y2="1"><stop stopColor="#e6cfac"/><stop offset="1" stopColor="#b69772"/></linearGradient><pattern id="paper" width="8" height="8" patternUnits="userSpaceOnUse"><circle cx="2" cy="3" r=".6" fill="#695c38" opacity=".06"/></pattern></defs><path fill="url(#wall)" d="M0 0h600v720H0z"/><path d="M0 40h140v460H0z" fill="#fffbed" opacity=".65"/><path d="M45 40h6v460h-6zM0 190h140v6H0z" fill="#ded4be"/><path d="m140 195 460 270v75L140 250Z" fill="#fffcf0" opacity=".45"/><path d="M0 600h600v120H0z" fill="#d8cbb4"/><ellipse cx="410" cy="658" rx="127" ry="20" fill="#736744" opacity=".12"/><g stroke="#756647" strokeWidth="4" fill="none"><path d="M422 596Q390 350 425 106M414 423Q345 368 318 252M411 365Q480 304 498 216M415 294Q355 241 356 158M418 234Q472 185 479 112M420 182Q389 146 390 85"/></g><g fill="#637146"><ellipse cx="407" cy="124" rx="12" ry="35" transform="rotate(-28 407 124)"/><ellipse cx="438" cy="155" rx="12" ry="35" transform="rotate(32 438 155)"/><ellipse cx="379" cy="197" rx="12" ry="34" transform="rotate(-48 379 197)"/><ellipse cx="348" cy="178" rx="11" ry="29" transform="rotate(-30 348 178)"/><ellipse cx="375" cy="253" rx="13" ry="38" transform="rotate(-44 375 253)"/><ellipse cx="451" cy="221" rx="12" ry="35" transform="rotate(45 451 221)"/><ellipse cx="481" cy="157" rx="11" ry="32" transform="rotate(30 481 157)"/><ellipse cx="482" cy="257" rx="13" ry="35" transform="rotate(40 482 257)"/><ellipse cx="453" cy="307" rx="12" ry="37" transform="rotate(49 453 307)"/><ellipse cx="357" cy="332" rx="13" ry="36" transform="rotate(-42 357 332)"/><ellipse cx="326" cy="283" rx="12" ry="34" transform="rotate(-29 326 283)"/><ellipse cx="378" cy="386" rx="13" ry="37" transform="rotate(-50 378 386)"/></g><g fill="#879264"><ellipse cx="436" cy="88" rx="10" ry="29" transform="rotate(24 436 88)"/><ellipse cx="386" cy="108" rx="10" ry="28" transform="rotate(-25 386 108)"/><ellipse cx="458" cy="183" rx="10" ry="31" transform="rotate(56 458 183)"/><ellipse cx="340" cy="226" rx="11" ry="31" transform="rotate(-53 340 226)"/><ellipse cx="464" cy="342" rx="11" ry="31" transform="rotate(57 464 342)"/><ellipse cx="396" cy="310" rx="11" ry="31" transform="rotate(-24 396 310)"/></g><path d="M371 572h98l-14 86h-70Z" fill="url(#pot)"/><ellipse cx="420" cy="572" rx="49" ry="9" fill="#aa8e70"/><ellipse cx="420" cy="572" rx="40" ry="5" fill="#6f6248"/><path d="M420 572v-50" stroke="#756647" strokeWidth="4"/><g stroke="#8e7356" strokeWidth="9" fill="none" strokeLinecap="round"><path d="m135 530-20 142m150-140 18 140M117 573h162"/></g><path d="M109 460Q116 433 147 437l116 16q25 4 24 32l-4 82H114Z" fill="url(#seat)"/><path d="M116 547q75-23 167 1v30H116Z" fill="#eee0c8"/><path d="M111 495v80m176-80v80" stroke="#9f805b" strokeWidth="9" strokeLinecap="round"/><ellipse cx="83" cy="621" rx="59" ry="11" fill="#a88f6c"/><path d="M81 627v58" stroke="#9a8261" strokeWidth="6"/><rect x="55" y="604" width="33" height="8" rx="2" fill="#eae1cf"/><path d="M92 591h15v16H92z" fill="#f5efdf"/><path fill="url(#paper)" d="M0 0h600v720H0z"/></svg></div>
        <div className="art-copy"><span className="art-tag">LESS NOISE. MORE POSSIBILITY.</span><h2>A calmer way<br/>to <em>create.</em></h2><p>Space for clear thoughts, meaningful work,<br/>and whatever comes next.</p><div className="art-rule"/></div>
        <div className="art-bottom"><span>MAKE ROOM FOR WHAT MATTERS.</span><div className="dots"><i/><i/><i/></div></div>
      </aside>
    </div>
  </main>;
}
