const res=document.getElementById('res');
function run(){
  const txt=document.getElementById('input').value||'';
  const fps=parseFloat(document.getElementById('fps').value||'0');
  const steps = txt ? txt.split('\n').length : 0;
  const load = (steps * (fps||1)).toFixed(2);
  res.innerText = 'Steps: ' + steps + '\nSimulated load: ' + load;
}