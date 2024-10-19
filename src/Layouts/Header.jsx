import React from "react";
import { Link } from "react-router-dom";

function Header({ children }) {
  return (
    <div>
      <div class=" bg-slate-500 mb-7 mx-auto">
        <div className=" navbar mx-auto w-[1200px] flex justify-between">
        <div class="flex-1">
          <a
            class="hidden lg:flex btn btn-primary text-3xl items-center"
            href="/"
          >
            C
          </a>
        </div>
        <ul className="fle flex-row gap-3">
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/products/:id'}>Products</Link>
        <Link to={'/cart'}>cart</Link>
        </ul>
        <div class="flex-none">
          <ul class="menu menu-horizontal px-1">
            <li>
              <a>Link</a>
            </li>
            <li>
              <details>
                <summary>Parent</summary>
                <ul class="bg-base-100 rounded-t-none p-2">
                  <li>
                    <a>Link 1</a>
                  </li>
                  <li>
                    <a>Link 2</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        </div>
      </div>
      {children}
    </div>
  );
}

export default Header;
