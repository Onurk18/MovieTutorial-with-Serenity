
using Serenity.ComponentModel;
using System.ComponentModel;

namespace MovieTutorial.Administration
{
    [NestedPermissionKeys]
    [DisplayName("Administration")]
    public class PermissionKeys
    {
        [Description("Background Jobs")]
        public const string BackgroundJob = "Administration:BackgroundJob";

        [Description("User, Role Management and Permissions")]
        public const string Security = "Administration:Security";

        [Description("Languages and Translations")]
        public const string Translation = "Administration:Translation";
    }

}
