import './style.css';

let menu = [
  {
    'name' : 'Home',
    'link' : '/homepage'
  },
  {
    'name' : 'contact',
    'link' : '/contact'
  },
  {
    'name' : 'menu 1',
    'link' : '/menu 1'
  },
  {
    'name' : 'menu 2',
    'link' : '/menu 2'
  },
  {
    'name' : 'menu 3',
    'link' : '/menu 3'
  }
]

function Header(props) {

  return (
    <div className='Header'>
      <div>Logo</div>

      <div className='menu-group'>
        <div className='list-menu'>

          {
            menu.map(listMenu => {
              return (
                <div>
                  {listMenu.name}
                </div>
              )
            }) 
          }

        </div>
        <div>087-466-3441</div>
      </div>

    </div>
  );
}

export default Header

