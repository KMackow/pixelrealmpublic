using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ScottLogic.PixelRealm.Api.Models.Domain
{
    public class Grid
    {
        public int Id { get; private set; }
        public string Contents { get; private set; }
        public DateTime CreatedOn { get; private set; }

        private Grid() { }

        public Grid(List<CellContent> contents)
        {

        }

        public void SetContents(List<CellContent> contents)
        {
            
        }
    }
}
