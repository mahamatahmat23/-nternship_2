using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using LibraryApp.Models;

namespace LibraryApp.Controllers
{
    public class BookItemController : ApiController
    {
        private DBModel db = new DBModel();

        // GET: api/BookItem
        public IQueryable<BookItem> GetBookItems()
        {
            return db.BookItems;
        }

       
        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        
    }
}