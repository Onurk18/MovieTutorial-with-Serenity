using Serenity;
using System;
namespace MovieTutorial.Web.Modules.Common.Jobs
{
    public class SimpleJob
    {
        // If you want to run SQL with a connection, add this
        // private readonly ISqlConnections Connections;
        // public SimpleJob(ISqlConnections connections) 
        // {
        //     this.Connections = connections ?? throw new ArgumentNullException(nameof(connections));
        // }

        public void Run()
        {
            

            // using (var connection = Connections.NewFor<MyRow>())
            // {
            //     do stuff
            // }
        }
    }
}
