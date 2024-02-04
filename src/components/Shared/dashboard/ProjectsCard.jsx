import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";

const ProjectsCard = () => {
    return (
        <div>
             <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
      {/* <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Your day your way</p>
        <h4 className="text-white/90 font-medium text-xl">Your checklist for better sleep</h4>
      </CardHeader> */}
      <Image
        removeWrapper
        alt="Relaxing app background"
        className="z-0 w-full h-full object-cover"
        src="https://storage.googleapis.com/prod-parametric-static/62664e41f203c19a3b3ea8da%2F62664ebbbc723a302457137f.png"
      />
      <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
        <div className="flex flex-grow gap-2 items-center">
          <Image
            alt="Breathing app icon"
            className="rounded-full w-10 h-11 bg-black"
            src="https://storage.googleapis.com/prod-parametric-static/62664e41f203c19a3b3ea8da%2F62664ebbbc723a302457137f.png"
          />
          <div className="flex flex-col">
            <p className="text-tiny text-white/60">Residential Demo</p>
            <p className="text-tiny text-white/60">2024-04-05-24 13:31</p>
          </div>
        </div>
        <Button radius="full" size="sm">Demo</Button>
      </CardFooter>
    </Card>
        </div>
    );
};

export default ProjectsCard;