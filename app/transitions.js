export default function(){
  this.transition(
    this.fromRoute('index'),
    this.toRoute('sub'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
}
